class Element {
  constructor(content, selector) {
    this.content = content;
    this.selector = selector || "";
  }

  async querySelector(selector) {
    return new Element(await this.execute(), selector);
  }

  async execute(fun) {
    return await sendMessage(
      "querySelector",
      JSON.stringify([this.content, this.selector, fun])
    );
  }

  async removeSelector(selector) {
    this.content = await sendMessage(
      "removeSelector",
      JSON.stringify([await this.outerHTML, selector])
    );
    return this;
  }

  async getAttributeText(attr) {
    return await sendMessage(
      "getAttributeText",
      JSON.stringify([await this.outerHTML, this.selector, attr])
    );
  }

  get text() {
    return this.execute("text");
  }

  get outerHTML() {
    return this.execute("outerHTML");
  }

  get innerHTML() {
    return this.execute("innerHTML");
  }
}

class XPathNode {
  constructor(content, selector) {
    this.content = content;
    this.selector = selector;
  }

  async execute(fun) {
    return await sendMessage(
      "queryXPath",
      JSON.stringify([this.content, this.selector, fun])
    );
  }

  get attr() {
    return this.execute("attr");
  }

  get attrs() {
    return this.execute("attrs");
  }

  get text() {
    return this.execute("text");
  }

  get allHTML() {
    return this.execute("allHTML");
  }

  get outerHTML() {
    return this.execute("outerHTML");
  }
}

console.log = function (message) {
  if (typeof message === "object") {
    message = JSON.stringify(message);
  }
  sendMessage("moruLog", JSON.stringify([message.toString()]));
};

class Extension {
  constructor(extension) {
    this.extension = extension;
  }

  //package = this.extension.package;
  //name = this.extension.name;
  // 在 load 中注册的 keys
  settingKeys = [];

  async request(url, options) {
    options = options || {};
    options.headers = options.headers || {};
    const miruUrl = options.headers["Miru-Url"] || this.extension.webSite;
    options.method = options.method || "get";
    const res = await sendMessage(
      "request",
      JSON.stringify([miruUrl + url, options])
    );
    try {
      return JSON.parse(res);
    } catch (e) {
      return res;
    }
  }

  querySelector(content, selector) {
    return new Element(content, selector);
  }

  queryXPath(content, selector) {
    return new XPathNode(content, selector);
  }

  async querySelectorAll(content, selector) {
    let elements = [];
    JSON.parse(
      await sendMessage("querySelectorAll", JSON.stringify({ content: content, selector: selector }))
    ).forEach((e) => {
      elements.push(new Element(e, selector));
    });
    return elements;
  }

  async getAttributeText(content, selector, attr) {
    return await sendMessage(
      "getAttributeText",
      JSON.stringify([content, selector, attr])
    );
  }

  popular(page) {
    throw new Error("not implement popular");
  }

  latest(page) {
    throw new Error("not implement latest");
  }

  search(kw, page, filter) {
    throw new Error("not implement search");
  }

  createFilter(filter) {
    throw new Error("not implement createFilter");
  }

  detail(url) {
    throw new Error("not implement detail");
  }

  watch(url) {
    throw new Error("not implement watch");
  }

  tags(url) {
    throw new Error("not implement tags");
  }

  checkUpdate(url) {
    throw new Error("not implement checkUpdate");
  }

  async getSetting(key) {
    return sendMessage("getSetting", JSON.stringify([key]));
  }

  async registerSetting(settings) {
    console.log(JSON.stringify([settings]));
    this.settingKeys.push(settings.key);
    return sendMessage("registerSetting", JSON.stringify([settings]));
  }

  async load() { }
}

async function stringify(callback) {
  const data = await callback();
  return typeof data === "object" ? JSON.stringify(data, 0, 2) : data;
}
