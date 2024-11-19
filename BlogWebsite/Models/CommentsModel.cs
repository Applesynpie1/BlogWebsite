using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class CommentsModel
    {
        public int commentID { get; set; }

        public int postID { get; set; }

        public int userID { get; set; }
        public string content { get; set; }

        public DateTime createAt { get; set; }
    }
}