// Vue.js requires this (simulates dotenv)
globalThis.process = { env: { NODE_ENV: 'development' } }
// Vue.js requires this (silents console warnings)
globalThis.__VUE_OPTIONS_API__ = false
globalThis.__VUE_PROD_DEVTOOLS__ = false

async function sleep(ms, msg = `[HOST] System initialization in progress - waiting ${ms / 1000} seconds...`) {
  if (msg) console.log(msg)
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  await sleep(5000, '[HOST] System initialization started - waiting 5 seconds...')

  console.log('[HOST] Dynamically importing library1 exports...')
  const { start } = await import('library1')
  console.log('[HOST] Exports loaded:')
  console.log('[HOST] > start =', start)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Instantiating microfrontend')
  const app = start('#app', 'Jane Smith')
  console.log('[HOST] app =', app)
  console.log('')

  console.log('[HOST] System initialized.')
}

main()
