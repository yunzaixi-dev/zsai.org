# Windows本地部署酒馆

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 前言
欢迎来到SillyTavern的世界！开始安装前，请确保您的电脑版本高于Windows 7
:::

## 开始安装

现在开始安装酒馆

## 1. 安装前准备：Git与Node.js

### 1.1 安装Git

<Tabs>
  <TabItem value="check" label="检查是否已安装Git" default>
    
1. 按下`Windows徽标+R`键，在运行框内输入`cmd`，点击"确定"打开命令提示符
2. 在命令提示符中输入：`git -v`
3. 如果显示版本号(如`git version x.x.x`)，则表示已安装Git，可跳至下一步
4. 如果显示"`git`不是内部或外部命令"，则需要安装Git
    
  </TabItem>
  <TabItem value="winget" label="使用winget安装Git(推荐)">

```bash
winget install --id Git.Git -e --source winget
```

  </TabItem>
  <TabItem value="installer" label="使用安装包安装Git">
    
1. 访问[Git官网](https://git-scm.com/download/win)下载安装包
2. 运行下载的安装包，按照默认设置一路点击"Next"完成安装
3. 安装完成后，重新打开cmd并输入`git -v`验证安装是否成功
    
  </TabItem>
  <TabItem value="choco" label="使用Chocolatey安装Git">
    
1. 首先确保已安装Chocolatey。若未安装，请以管理员身份运行PowerShell并执行：
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

2. 安装完Chocolatey后，在管理员权限的命令提示符或PowerShell中执行：
   ```bash
   choco install git -y
   ```

3. 安装完成后，重启命令提示符并输入`git -v`验证安装
    
  </TabItem>
</Tabs>

### 1.2 安装Node.js

<Tabs>
  <TabItem value="check-node" label="检查是否已安装Node.js" default>
    
1. 在命令提示符中输入：`node -v`和`npm -v`
2. 如果两个命令都显示版本号，则表示已安装Node.js
3. 如果显示不是内部或外部命令，则需要安装Node.js
    
:::caution 注意
不推荐使用超过v23版本的Node.js，可能会导致兼容性问题
:::
    
  </TabItem>
  <TabItem value="winget-node" label="使用winget安装Node.js(推荐)">

```bash
winget install OpenJS.NodeJS.LTS -v 20.10.0
```

  </TabItem>
  <TabItem value="installer-node" label="使用安装包安装Node.js">
    
1. 访问[Node.js官网](https://nodejs.org/)下载LTS版本
2. 运行下载的安装包，按照默认设置一路点击"Next"完成安装
3. 安装完成后，重新打开cmd并输入`node -v`和`npm -v`验证安装是否成功
    
  </TabItem>
  <TabItem value="choco" label="使用Chocolatey安装">

```bash
# 先安装Chocolatey(如果尚未安装)
# 以管理员身份运行PowerShell并执行:
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# 然后安装Node.js
choco install nodejs-lts -y
```
    
  </TabItem>
</Tabs>

## 2. 配置npm镜像(可选但推荐国内用户设置)

<Tabs>
  <TabItem value="check-npm" label="查看当前npm镜像" default>

```bash
npm config get registry
```

默认应显示`https://registry.npmjs.org`
    
  </TabItem>
  <TabItem value="set-npm" label="修改为国内镜像">

```bash
npm config set registry https://registry.npmmirror.com
```
    
  </TabItem>
</Tabs>

## 3. 安装SillyTavern

### 3.1 选择安装目录

1. 选择或新建一个文件夹作为SillyTavern的安装位置
2. 在文件夹空白处按住Shift键+右键，选择"在此处打开命令窗口"
   或者在文件资源管理器地址栏输入`cmd`并按回车

### 3.2 拉取SillyTavern代码

<Tabs>
  <TabItem value="stable" label="稳定版(推荐)" default>

```bash
git clone https://github.com/SillyTavern/SillyTavern -b release
```
    
  </TabItem>
  <TabItem value="beta" label="测试版">

```bash
git clone https://github.com/SillyTavern/SillyTavern -b staging
```
    
  </TabItem>
</Tabs>

:::tip 遇到网络问题？
如果遇到网络错误，可以考虑使用代理或网络加速工具
:::

## 4. 安装依赖并运行SillyTavern

### 4.1 进入SillyTavern目录

```bash
cd SillyTavern
```

### 4.2 安装依赖和运行

<Tabs>
  <TabItem value="auto" label="自动安装(推荐)" default>
    
直接双击SillyTavern文件夹中的`start.bat`文件，它会自动安装依赖并启动服务
    
  </TabItem>
  <TabItem value="manual" label="手动安装">

```bash
# 安装依赖
npm install

# 启动服务
npm start
```
    
  </TabItem>
</Tabs>

### 4.3 访问SillyTavern

启动成功后，打开浏览器并访问：`http://localhost:8000`

## 常见问题解决

<details>
<summary>Git拉取时网络错误</summary>
<p>可以尝试使用镜像源或配置代理</p>
</details>

<details>
<summary>npm脚本无法运行</summary>
<p>如果遇到"在此系统上无法运行脚本"的错误，可以以管理员身份运行PowerShell并执行：</p>

```powershell
Set-ExecutionPolicy RemoteSigned
```
</details>

<details>
<summary>端口占用</summary>
<p>如果8000端口被占用，可以修改配置文件中的端口设置</p>
</details>

## 总结

通过以上步骤，您已成功在Windows系统上安装并运行SillyTavern。初始安装只是一个基础界面，您可以根据自己的需求和喜好进一步配置和自定义，打造专属于您的AI交互体验。