export function loadRouteConfig(): {
  path: string
  name: string
  parent?: string
}[] {
  return [
    {
      path: 'system/data',
      // parent: '',
      name: 'systemData'
    },
    {
      path: 'system/project',
      // parent: '',
      name: 'systemProject'
    }
  ]
}
