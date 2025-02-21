// Keep only from here to the end of the file
const tweets = [
    {
        username: 'Elon Musk',
        handle: '@elonmusk',
        content: '🚀 Starship launch window opens in 15 minutes',
        time: '1m',
        likes: 45632,
        retweets: 12803,
        replies: 3492
    },
    {
        username: 'NASA',
        handle: '@NASA',
        content: '🌎 Our planet is beautiful.\n\nThis new image from the @Space_Station shows Earth\'s horizon as the station orbited 258 miles above the Indian Ocean.',
        time: '27m',
        likes: 128900,
        retweets: 23400,
        replies: 1205
    },
    {
        username: 'Barack Obama',
        handle: '@BarackObama',
        content: 'Michelle and I are thrilled to share our family\'s summer reading list — full of books that will keep you busy by the pool or on your couch. Let us know which books you\'re reading this summer!',
        time: '1h',
        likes: 234500,
        retweets: 45600,
        replies: 8900
    },
    {
        username: 'Taylor Swift',
        handle: '@taylorswift13',
        content: 'Can\'t wait to see you all tonight!! 🎸✨ #ErasTour',
        time: '2h',
        likes: 567800,
        retweets: 89400,
        replies: 23500
    },
    {
        username: 'NBA',
        handle: '@NBA',
        content: '🏀 WHAT A GAME!\n\nLakers defeat the Warriors in overtime 124-120\n\nLeBron: 38 PTS, 12 AST\nCurry: 42 PTS, 8 3PM',
        time: '3h',
        likes: 89700,
        retweets: 12300,
        replies: 4500
    },
    {
        username: 'BBC Breaking News',
        handle: '@BBCBreaking',
        content: 'BREAKING: Scientists announce major breakthrough in renewable energy storage technology, potentially solving key challenge in fight against climate change',
        time: '4h',
        likes: 45600,
        retweets: 28900,
        replies: 3400
    },
    {
        username: 'National Weather Service',
        handle: '@NWS',
        content: '⚠️ Severe Weather Alert ⚠️\n\nTornado Warning issued for eastern Kansas until 7:45 PM CDT. Take shelter immediately if you are in the affected area. #KSwx',
        time: '5h',
        likes: 12300,
        retweets: 23400,
        replies: 890
    },
    {
        username: 'Google',
        handle: '@Google',
        content: 'Introducing the next generation of AI-powered search. Ask complex questions, get detailed answers, and discover new ways to learn about the world around you.',
        time: '6h',
        likes: 78900,
        retweets: 15600,
        replies: 4300
    },
    {
        username: 'The New York Times',
        handle: '@nytimes',
        content: 'Breaking News: Global temperatures hit record highs for the third consecutive month, climate scientists report. Read more:',
        time: '7h',
        likes: 34500,
        retweets: 12800,
        replies: 5600
    },
    {
        username: 'Ryan Reynolds',
        handle: '@VancityReynolds',
        content: 'Just wrapped filming! That\'s a wrap on Deadpool 3. Thanks to the entire crew for making this dream project come true. Also, no spoilers were harmed in the making of this film. 🎬',
        time: '8h',
        likes: 891200,
        retweets: 156700,
        replies: 23400
    }
];

function createTweetElement(tweet) {
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };

    // Generate avatar URL based on username
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(tweet.username)}&background=random&size=48`;

    return `
        <div class="tweet">
            <div class="tweet-content">
                <img src="${avatarUrl}" class="tweet-avatar" alt="${tweet.username}'s avatar">
                <div class="tweet-body">
                    <div class="tweet-header">
                        <span class="tweet-name">${tweet.username}</span>
                        <span class="tweet-handle">${tweet.handle}</span>
                        <span class="tweet-time">· ${tweet.time}</span>
                    </div>
                    <div class="tweet-text">${tweet.content}</div>
                    <div class="tweet-actions">
                        <div class="tweet-action">
                            <i class="far fa-comment"></i>
                            <span>${formatNumber(tweet.replies)}</span>
                        </div>
                        <div class="tweet-action">
                            <i class="fas fa-retweet"></i>
                            <span>${formatNumber(tweet.retweets)}</span>
                        </div>
                        <div class="tweet-action">
                            <i class="far fa-heart"></i>
                            <span>${formatNumber(tweet.likes)}</span>
                        </div>
                        <div class="tweet-action">
                            <i class="fas fa-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTweets() {
    const tweetFeed = document.getElementById('tweet-feed');
    if (!tweetFeed) {
        console.error('Tweet feed element not found!');
        return;
    }
    tweetFeed.innerHTML = tweets.map(tweet => createTweetElement(tweet)).join('');
}

// Initialize the feed
document.addEventListener('DOMContentLoaded', renderTweets); 