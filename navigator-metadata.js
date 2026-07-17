/* Shared, dependency-free schema-v2 metadata helpers.
   Loaded directly by Safari and by the Node regression test. */
(function (root) {
  "use strict";

  function formatBb(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return null;
    return `${number.toFixed(6).replace(/\.?0+$/, "")}bb`;
  }

  function chartLabel(record) {
    const primary = record?.decision?.primaryAction;
    const sizes = (primary?.sizesBb || []).map(formatBb).filter(Boolean);
    return sizes.length > 0 ? sizes.join(" / ") : (primary?.actionLabel || null);
  }

  function incomingLabel(record) {
    const incoming = (record?.navigationHistory || []).slice(-1)[0];
    if (!incoming) return null;
    return [incoming.actionLabel, formatBb(incoming.toBb)].filter(Boolean).join(" ");
  }

  function findRecords(packMetadata, path) {
    const key = (path || []).join("|");
    return (packMetadata?.nodes || []).filter(record =>
      record.navigation?.pathKey === key ||
      (record.navigation?.path || []).join("|") === key
    );
  }

  function preferLineage(records, ancestorNodeId) {
    const descendants = (records || []).filter(record =>
      (record.lineageNodeIds || []).includes(ancestorNodeId)
    );
    return descendants.length > 0 ? descendants : records;
  }

  function makeCharts(packFolder, records) {
    const labels = records.map(chartLabel);
    const duplicateLabels = new Set(labels.filter((label, index) =>
      label && labels.indexOf(label) !== index
    ));

    return records.map((record, index) => {
      let label = labels[index];
      if (duplicateLabels.has(label)) {
        const incoming = incomingLabel(record);
        if (incoming) label = `${label} · facing ${incoming}`;
      }
      return {
        label,
        src: `images/${packFolder}/${record.file}`,
        metadata: record,
        nodeId: record.nodeId,
      };
    }).sort((a, b) => {
      const aSize = Number(a.metadata?.decision?.primaryAction?.sizesBb?.[0]);
      const bSize = Number(b.metadata?.decision?.primaryAction?.sizesBb?.[0]);
      if (Number.isFinite(aSize) && Number.isFinite(bSize) && aSize !== bSize) return aSize - bSize;
      return (a.nodeId || 0) - (b.nodeId || 0);
    });
  }

  function actionTrail(record, path) {
    if (!record) return [];
    return (path || []).map((step, index) => {
      if (index < path.length - 1) {
        const action = record.navigationHistory?.[index];
        return {
          position: String(step).replace(/_CC$/, ""),
          actionLabel: action?.actionLabel || null,
          sizeLabel: formatBb(action?.toBb),
          source: "history",
        };
      }

      const primary = record.decision?.primaryAction;
      const sizes = (primary?.sizesBb || []).map(formatBb).filter(Boolean);
      return {
        position: String(step).replace(/_CC$/, ""),
        actionLabel: primary?.actionLabel || null,
        sizeLabel: sizes.length > 0 ? sizes.join(" / ") : null,
        source: "decision",
      };
    });
  }

  root.RANGE_NAVIGATOR_CORE = {
    formatBb, findRecords, preferLineage, makeCharts, actionTrail,
  };
})(typeof window !== "undefined" ? window : globalThis);
