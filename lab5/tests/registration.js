/* globals gauge*/
"use strict";
const path = require("path");
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  click,
  textBox,
  focus,
  currentURL,
  waitFor,
} = require("taiko");
const assert = require("assert");
const headless = headless_chrome.toLowerCase() === "true";

afterSuite(async () => {
  await closeBrowser();
});

step("Open aplication", async function () {
  await goto("https://adoring-pasteur-3ae17d.netlify.app/mens.html");
});

step("Click Sign Up", async function () {
  await click("Sign Up");
});
step("Submit", async function () {
  await click("Submit");
  await waitFor(500);
});
step("Write name <name>", async (name) => {
  await focus(textBox({ name: "Name" }));
  await write(name);
});
step("Write password <password>", async (password) => {
  await focus(textBox({ name: "password" }));
  await write(password);
});
step("Write email <email>", async (email) => {
  await focus(textBox({ name: "Email" }));
  await write(email);
});
step("Write confirm password <confirmPassword>", async (confirmPassword) => {
  await focus(textBox({ name: "Confirm Password" }));
  await write(confirmPassword);
});
step("Registration success", async () => {
  await assert.strictEqual(
    await currentURL(),
    "https://adoring-pasteur-3ae17d.netlify.app/mens.html#"
  );
});
step("Registration failed", async () => {
  await assert.strictEqual(
    await currentURL(),
    "https://adoring-pasteur-3ae17d.netlify.app/mens.html"
  );
});
