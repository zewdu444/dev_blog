'use strict';

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
   console.log(strapi);
   const isEligible= policyContext.state.user && policyContext.request.user.role.code === 'admin';
  // Add your own logic here.
    if (isEligible) {
      return true;
    }

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
