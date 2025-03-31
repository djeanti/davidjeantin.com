function setup_sharing(){
    const link = encodeURI(window.location.href);
    const msg = encodeURIComponent('Message content here');
    const title = encodeURIComponent('Article or Post Title Here');
    
    let fb_sharing_link = document.getElementById("fb_sharing_link");
    let twitter_sharing_link = document.getElementById("twitter_sharing_link");
    let linkedin_sharing_link = document.getElementById("linkedin_sharing_link");

    fb_sharing_link.href = `https://www.facebook.com/share.php?u=${link}`;
    fb_sharing_link.target = `_blank`;
    
    twitter_sharing_link.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;
    twitter_sharing_link.target = `_blank`;

    linkedin_sharing_link.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
    linkedin_sharing_link.target = `_blank`;
}

setup_sharing();