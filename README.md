**简体中文** | [English](README-en.md) | [日本語](README-ja.md) | [うちなーぐち](README-ryu.md) | [Русский](README-ru.md) | [Беларуская](README-be.md) | [Українська](README-uk.md)

<div align="center">
  <img width="300" src="./assets/icon/logo.png" alt="Miru 看板娘"/>
</div>

<h1 align="center">Moru App</h1>

<h1 align="center">本Fork主要针对移动平台，支持Android，IOS，其余平台将逐渐弱化支持</h1>

<p align="center">免费，开源的 支持视频，漫画，小说扩展源的多功能应用，支持 Android，Windows，Web.</p>

<div align="center">

[![GitHub release (with filter)](https://img.shields.io/github/v/release/miru-project/miru-app)](https://github.com/miru-project/miru-app/releases/latest)
[![License](https://img.shields.io/github/license/miru-project/miru-app)](https://github.com/miru-project/miru-app/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/miru-project/miru-app)](https://github.com/miru-project/miru-app/stargazers)
[![GitHub all releases](https://img.shields.io/github/downloads/miru-project/miru-app/total)](https://github.com/miru-project/miru-app/releases/latest)

</div>

![screenshot](assets/screenshot/screenshot.webp)

## Moru

- 重构了Runtime，优化原Miru内存资源占用过高
- 进行了多处UI改进
- 支持漫画自动加载下一页
- 修复一些bug，平台问题
- ...更多内容请查看Dev分支提交日志

## 特性

- 支持 `windows`，`android`, `ios`
- 友好的扩展编写支持，调试日志
- 扩展使用 JavaScript 语言，开发简单
- 支持自定义扩展仓库
- 官方扩展仓库提供视频源，无需编写任何扩展即可使用
- 支持在线观看多种视频，漫画，小说源，实现多平台的统一
- 统一系统 UI 的设计语言
- 自动获取 TMDB 元数据信息

## Todo

- [x] BT 种子播放
- [x] 更好的调试工具
- [ ] 数据同步
- [ ] 自动搜寻字幕

## 安装

你可以通过 [Release](https://github.com/miru-project/miru-app/releases/latest) 页面下载最新版本的安装包，或者通过下面的方法自行构建

## 构建

### 安装 Flutter

参考 [Flutter 官方文档](https://flutter.dev/docs/get-started/install)

### 安装依赖

```bash
flutter pub get
```

### 运行

```bash
flutter run
```

### 打包

Android

```bash
flutter build apk
```

Windows

```bash
flutter build windows
```

## 关于 Linux

目前 Linux 因为依赖问题导致无法启动 quickjs 所以暂时不支持了

## 贡献

欢迎任何形式的贡献，包括但不限于：

- 提出建议
- Bug 反馈
- 代码贡献
- 文档编写

## 交流

Telegram: <https://t.me/MiruChat>
