using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class PostsModel
    {
        public int postID { get; set; }

        public int userID { get; set; }
        public string content { get; set; }

        public string post_type { get; set; }

        public DateTime createAt { get; set; }
    }
}