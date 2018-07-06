/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));

    it('should contain an <h1> element for the page title', () => { 
      nightmare
      .goto(url)
        .evaluate(() => document.querySelector('h1').innerText)
        .then(headerText => {
          expect(headerText).to.not.be.null;
          expect(headerText).to.equal('Movie Finder');
        }); 
    });

  it('should contain a <button> with the name search-button', () => {
    nightmare
    .goto(url)
      .evaluate(() => document.querySelector('button').name)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('search-button');
      });
  });

  it('should contain an <input> with the name search-bar', () => {
    nightmare
    .goto(url)
      .evaluate(() => document.querySelector('input').name)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('search-bar');
      });
  });

});

