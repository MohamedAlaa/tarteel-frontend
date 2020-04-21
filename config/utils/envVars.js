const isGitHubDeploy = process.env.NOW_GITHUB_DEPLOYMENT == 1;

const env = {
  development: {
    TARTEEL_API_KEY: '9a3b6bfbafe8ee319c5275fb921be92317c14046',
    RECOGNITION_SERVER_URL: 'http://localhost:5000',
    TRANSCRIBE_SERVER_URL: 'http://localhost:5000',
    API_URL: 'https://api-dev.tarteel.io',
    DEBUG: true
  },
  staging: {
    TARTEEL_API_KEY: process.env.STAGING_TARTEEL_API_KEY,
    RECOGNITION_SERVER_URL: 'https://tarteel-voice-fe.now.sh/',
    TRANSCRIBE_SERVER_URL: 'https://tarteel-voice-fe.now.sh/',
    API_URL: process.env.STAGING_API_URL,
    DEBUG: false
  },
  production: {
    TARTEEL_API_KEY: process.env.TARTEEL_API_KEY,
    RECOGNITION_SERVER_URL: 'https://tarteel-voice-fe.now.sh/',
    TRANSCRIBE_SERVER_URL: 'https://tarteel-voice-fe.now.sh/',
    API_URL: process.env.API_URL,
    DEBUG: false
  },
};

const currentEnv = isGitHubDeploy
  ? env.staging
  : env[process.env.DEPLOYMENT] || env.development;

/**
 * Gets a string environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {String} defaultVal - The default value to use.
 *
 * @return {String} The value.
 */
export function string(name, defaultVal) {
  return currentEnv[name] || defaultVal;
}

/**
 * Gets a number environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {number} defaultVal - The default value to use.
 *
 * @return {number} The value.
 */
export function number(name, defaultVal) {
  return currentEnv[name] ? parseInt(currentEnv[name], 10) : defaultVal;
}

export function bool(name, defaultVal) {
  return currentEnv[name]
    ? currentEnv[name] === 'true' || currentEnv[name] === '1'
    : defaultVal;
}
