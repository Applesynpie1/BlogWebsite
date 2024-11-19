using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class PostsMap : EntityTypeConfiguration<PostsModel>
    {
        public PostsMap()
        {
            HasKey(i => i.postID);
            ToTable("posts");
        }
    }
}