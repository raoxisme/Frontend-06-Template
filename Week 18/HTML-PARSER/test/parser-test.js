import assert from "assert";
import { parseHTML } from "../src/parser";

describe("parse html:", () => {
  it("<DIV></DIV>", () => {
    let tree = parseHTML("<DIV></DIV>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a></a>", () => {
    let tree = parseHTML("<a></a>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a/>", () => {
    let tree = parseHTML("<a/>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a href='http://www.link.com'></a>", () => {
    let tree = parseHTML("<a href='http://www.link.com'></a>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a href='http://www.link.com'/>", () => {
    let tree = parseHTML("<a href='http://www.link.com'/>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a>content</a>", () => {
    let tree = parseHTML("<a>content</a>");
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 1);
  });
});
