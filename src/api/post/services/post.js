'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post', ({ strapi }) => ({

  async findPublic(args) {
     const newQuery = {
       ...args,
       filters: {
         ...args.filters,
         premium: false,
       }
     };
    const publicPosts = await strapi.entityService.findMany('api::post.post',
     this.getFetchParams(newQuery)
     );
      return publicPosts;
  },
  async likePost(args){
    const {postId,userId,query} = args;
    // use the underlying service to fetch the post
    const postToLike = await strapi.entityService.findOne('api::post.post',postId,{
      populate: ['likedBy']
    }
    );
    const updatedPost = await strapi.entityService.update('api::post.post',postId,{
      data :{
        likedBy: [...postToLike.likedBy, userId],
      },
      ...query
    });
    return updatedPost;
  }

}));
