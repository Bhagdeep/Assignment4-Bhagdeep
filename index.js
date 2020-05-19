/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */

alert('JS successfully loaded.');
/*
 * Add your JavaScript to this file to complete the assignment.
*/

//**                  Variables             *****/

//tweeter button,author, text variables
var tweet_button = document.getElementById("create-twit-button");
var tweetAuthor = document.getElementById("twit-attribution-input");
var tweetText = document.getElementById("twit-text-input");

//Modal variables
var mod_background = document.getElementById("modal-backdrop");
var mod = document.getElementById("create-twit-modal");
var mod_accept = document.getElementsByClassName("modal-accept-button")[0];
var mod_cancel = document.getElementsByClassName("modal-cancel-button")[0];
var mod_close = document.getElementsByClassName("modal-close-button")[0];

//navbar search variables
var search_button = document.getElementById("navbar-search-button");
var search_text_bar = document.getElementById("navbar-search-input");


//***                Functions             ***/
//Search bar Function
function search_function(event)
{
  var total_tweets = document.getElementsByClassName('twit');

  for (i = 0; i < 8; i++)
  {
    if ((total_tweets[i].childNodes[3].childNodes[1].textContent.toLowerCase().includes(search_text_bar.value)))
    {
      total_tweets[i].classList.remove('hidden');
      continue;
    }
    else if ((total_tweets[i].childNodes[3].childNodes[3].textContent.toLowerCase().includes(search_text_bar.value)))
    {
      total_tweets[i].classList.remove('hidden');
      continue;
    }
    else
    {
      total_tweets[i].classList.add('hidden');
    }
  }

  if (total_tweets.length > 8)
  {
    for (i = 8; i < total_tweets.length; i++)
    {
      if (total_tweets[i].childNodes[1].childNodes[0].textContent.toLowerCase().includes(search_text_bar.value))
      {
        total_tweets[i].classList.remove('hidden');
        continue;
      }
      else if (total_tweets[i].childNodes[1].childNodes[1].textContent.toLowerCase().includes(search_text_bar.value))
      {
        total_tweets[i].classList.remove('hidden');
        continue;
      }
      else {
        total_tweets[i].classList.add('hidden');
      }
    }
  }
}

//Modal Function
function create_mod(event)
{
  if(mod.classList.contains("hidden"))
  {
    mod.classList.remove('hidden');
    mod_background.classList.remove('hidden');
    tweetAuthor.value = "";
    tweetText.value = "";
  }
  else
  {
    mod.classList.add('hidden');
    mod_background.classList.add('hidden');
  }
}

//Writing tweets function
function create_tweets(event)
{
  //Checkers, if the tweet/author text box is filled or not
  if(tweetText.value == "")
  {
    alert("Warning: You have not entered your text in the twit you wanted to tweet on this here tweeter");
    return;
  }

  else if(tweetAuthor.value == "")
  {
    alert("Warning: You have not signed this twit with your name, without it tweeters wont know whose twit you tweeted out of this tweeter");
    return;
  }

  else
  {
    //Label and organize
    var horn = document.createElement('i');
    horn.classList.add('fa');
    horn.classList.add('fa-bullhorn');

    var tweet_horn = document.createElement('div');
    tweet_horn.classList.add('twit-icon');
    tweet_horn.appendChild(horn);

    var text = document.createElement('p');
    text.classList.add('twit-text');
    text.textContent = tweetText.value;

    var author = document.createElement('a');
    author.href = '#';
    author.textContent = tweetAuthor.value;

    var attribution = document.createElement('p');
    attribution.classList.add('twit-attribution');
    attribution.appendChild(author);

    var twit_content = document.createElement('div');
    twit_content.classList.add("twit-content");
    twit_content.appendChild(text);
    twit_content.appendChild(attribution);

    var tweet = document.createElement('article');
    tweet.classList.add('twit');
    tweet.appendChild(tweet_horn);
    tweet.appendChild(twit_content);

    var page = document.getElementsByClassName('twit-container')[0];
    page.appendChild(tweet);

    //reset the hidden values of modal
    create_mod();
  }
}

//***           Applying Functions            ***//

//twit button, creating tweet
tweet_button.addEventListener('click', create_mod);

//modal functions
mod_accept.addEventListener('click', create_tweets);
mod_cancel.addEventListener('click', create_mod);
mod_close.addEventListener('click', create_mod);

//Search bar functions
search_text_bar.addEventListener('keyup', search_function);
search_button.addEventListener('click', search_function);
