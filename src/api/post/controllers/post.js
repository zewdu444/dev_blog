'use strict';
/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post',({strapi}) => ({


//  solution 1:  filter out premium posts in the controller
  // async find(ctx) {
  //   //  fetch all posts
  //   const {data, meta}= await  super.find(ctx);
  //   if(ctx.state.user){
  //     return {data, meta};
  //   }
  //   // not authenticated,
  //   const  filteredData = data.filter((post)=>post.attributes.premium===false);
  //   return {data: filteredData, meta};
  // }

 // solution 2: filter out premium posts in the service
    // async find(ctx) {
    //   const isRequestingPremium =ctx.query.filters && ctx.query.filters.premium === false;

    //   if(ctx.state.user || isRequestingPremium){
    //     return await super.find(ctx);
    //   }
    //   // not authenticated, filter out premium posts
    //   const {query} =ctx;
    //   const filteredData = await strapi.service('api::post.post').find({
    //     ...query,
    //     filters : {
    //       ...query.filters,
    //       premium: false
    //     }
    //   });
    //   const sanitizedPosts = await this.sanitizeOutput(filteredData,ctx);
    //   return this.transformResponse(sanitizedPosts);
    // },
  //  solution 3: filter out premium posts in the service
     async find(ctx) {
      const isRequestingPremium =ctx.query.filters && ctx.query.filters.premium === false;
        if(ctx.state.user || isRequestingPremium){
          return await super.find(ctx);
        }
        // not authenticated, filter out premium posts
        const publicPosts = await strapi.service('api::post.post').findPublic(ctx.query);
        const sanitizedPosts = await this.sanitizeOutput(publicPosts,ctx);
        return this.transformResponse(sanitizedPosts);
     }
}));
