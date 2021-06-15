export default (app) => {
  app.post(
    `/tenant/:tenantId/tell-problem`,
    require('./tellProblemCreate').default,
  );
  app.put(
    `/tenant/:tenantId/tell-problem/:id`,
    require('./tellProblemUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/tell-problem/import`,
    require('./tellProblemImport').default,
  );
  app.delete(
    `/tenant/:tenantId/tell-problem`,
    require('./tellProblemDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/tell-problem/autocomplete`,
    require('./tellProblemAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/tell-problem`,
    require('./tellProblemList').default,
  );
  app.get(
    `/tenant/:tenantId/tell-problem/:id`,
    require('./tellProblemFind').default,
  );
};