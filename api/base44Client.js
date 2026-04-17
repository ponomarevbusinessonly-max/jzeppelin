import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

// Disable Base44 analytics — this app has no user sessions, so the analytics
// module would 401 trying to call /me. The SDK stores analytics state in
// window.base44SharedInstances['analytics'], which is populated on module
// import. Setting enabled:false here runs after imports but before createClient,
// so createAnalyticsModule() sees it and returns no-ops.
if (typeof window !== 'undefined') {
  const inst = window.base44SharedInstances?.analytics?.instance;
  if (inst?.config) {
    inst.config.enabled = false;
  }
}

const { appId, token, functionsVersion, appBaseUrl } = appParams;

export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  requiresAuth: false,
  appBaseUrl,
});
