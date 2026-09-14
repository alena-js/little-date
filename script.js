const startScreen = document.querySelector('#start-screen');
const letterScreen = document.querySelector('#letter-screen');
const invitationScreen = document.querySelector('#invitation-screen');
const finalScreen = document.querySelector('#final-screen');

const openLetterButton = document.querySelector('#open-letter');
const openInvitationButton = document.querySelector('#open-invitation');
const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');

openLetterButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  letterScreen.classList.remove('hidden');
});

openInvitationButton.addEventListener('click', () => {
  letterScreen.classList.add('hidden');
  invitationScreen.classList.remove('hidden');
});

yesButton.addEventListener('click', () => {
  invitationScreen.classList.add('hidden');
  finalScreen.classList.remove('hidden');
});

noButton.addEventListener('click', () => {
  noButton.textContent = '☹';
  noButton.disabled = true;
});