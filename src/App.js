import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

const quotes = [
  "Dont Focus on Girls focus on goals!! - Srikar",
  "Life is a story that you tell yourself and I wanna make sure atleast try that it worth telling -Premchand",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Every moment is a fresh beginning. - T.S. Eliot",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only person you should try to be better than is the person you were yesterday. - Unknown",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' - Muhammad Ali",
  "The only way to prove that you're a good sport is to lose. - Ernie Banks",
  "The harder the battle, the sweeter the victory. - Les Brown",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Football is like life - it requires perseverance, self-denial, hard work, sacrifice, dedication and respect for authority. - Vince Lombardi",
  "The more difficult the victory, the greater the happiness in winning. - Pele",
  "When you win, you don't get carried away. But if you go step by step, with confidence, you can go far. - Diego Maradona",
  "I learned all about life with a ball at my feet. - Ronaldinho",
  "To succeed... you need to find something to hold on to, something to motivate you, something to inspire you. - Tony Dorsett",
  "You have to fight to reach your dream. You have to sacrifice and work hard for it. - Lionel Messi",
  "Football is freedom. - Zinedine Zidane",
  "Every strike brings me closer to the next home run. - Babe Ruth",
  "The difference between the impossible and the possible lies in a person's determination. - Tommy Lasorda",
  "Cricket is a pressure game, and when it comes to an India-Pakistan match, the pressure is doubled. - Imran Khan",
  "If you want to play cricket, you should first sweat it out in practice to feel confident about your game. - Sachin Tendulkar",
  "When you have a dream, you have got to grab it and never let go. - Carol Burnett",
  "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come. - Dwayne Johnson",
  "The secret of success is to be ready when your opportunity comes. - Benjamin Disraeli",
  "I am not a perfectionist, but I like to feel that things are done well. - Wayne Rooney",
  "Your love makes me strong, your hate makes me unstoppable. - Cristiano Ronaldo",
  "I'm not the most talented; I'm not the most intelligent. But I'm also not the one who gives up. - Cristiano Ronaldo",
  "If you don't really have a dream, you can't really push yourself; you don't really know what the target is. - MS Dhoni",
  "The more difficult the victory, the greater the happiness in winning. - MS Dhoni",
  "I never allow myself to be pressured. - MS Dhoni",
  "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg"
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className='container'>
      <h1 className='grad'>Inspiring Life Quotes</h1>
      <div className='quote'>
      {quote && <p>{quote}</p>}
      </div>

      <Button variant="primary" onClick={generateRandomQuote}>Next Quote</Button>


    </div>
    
  );
};

export default RandomQuoteGenerator; 
