export const Paths = {
    routes: {
      authCallback: "/api/auth/callback",
      signup: "/api/auth/signup",
      login: "/api/auth/login",
      logout: "/api/auth/logout",
      settings: "/api/dfw/settings",
      validations: "/api/dfw/validations",
      j010_200eItemCdOnBlur: "/api/dfw/j010_200e/item_cd_onBlur",
      j010_200e: {
        customer: "/api/dfw/j010_200e/customer",
        soQty: "/api/dfw/j010_200e/so_qty",
      },
    },
    pages: {
      index: "/",
      menu: "/menu",
      dfw: {
        j010_200e: {
          operation: "/dfw/j010_200e/operation",
          entry: "/dfw/j010_200e/entry",
        },
        m050_000e: {
          operation: "/dfw/m050_000e/operation",
          entry: "/dfw/m050_000e/entry",
        },
      },
      examples: {
        memory: "/examples/memory",
        table: {
          original: "/examples/table/original",
          virtualized: "/examples/table/virtualized",
          editable: "/examples/table/virtualized-editable",
        },
      },
    },
    backend: {
      inputLog: {
        getHistory: "/InputLog/getHistory",
        getScreenHistory: "/InputLog/getScreenHistory",
        save: "/InputLog/save",
      },
      j010: {
        dfw: {
          create: "/j010/dfw/create",
        },
      },
    },
  } as const;
  