using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class CommentsMap : EntityTypeConfiguration<CommentsModel>
    {
        public CommentsMap()
        {
            HasKey(i => i.commentID);
            ToTable("comments");
        }
    }
}