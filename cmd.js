document.addEventListener('DOMContentLoaded', () => {
    const cmdInput = document.getElementById('cmd-input');
    const terminal = document.getElementById('terminal-content');
    const inputLine = document.querySelector('.terminal-input-line');
    const promptSpan = inputLine.querySelector('span');

    let commandHistory = [];
    let historyIndex = -1;
    let currentDir = 'C:\\Users\\Eto'; 


    terminal.addEventListener('click', () => cmdInput.focus());


    function updatePrompt() {
        promptSpan.innerText = `${currentDir}>`;
    }
    updatePrompt();

    cmdInput.addEventListener('keydown', async function (e) {
        

        if (e.key === 'ArrowUp') {
            e.preventDefault(); 
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            } else if (historyIndex === -1 && commandHistory.length > 0) {
                historyIndex = commandHistory.length - 1;
                this.value = commandHistory[historyIndex];
            }
            return;
        }


        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1 && historyIndex !== -1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1; 
                this.value = '';
            }
            return;
        }


        if (e.key === 'Enter') {
            const fullCommand = this.value.trim();
            if (!fullCommand) return;

            commandHistory.push(fullCommand);
            historyIndex = -1; 

            const args = fullCommand.split(' ');
            const command = args[0].toLowerCase();
            const commandArgs = args.slice(1).join(' ');

            let response = '';
            let skipDefaultPrint = false; 

            switch (command) {
                case 'help':
                    response = `
                        Available commands:<br>
                        - <b>help</b>       : Shows this message<br>
                        - <b>about</b>      : Displays developer info<br>
                        - <b>whoami</b>     : Shows current user logged in<br>
                        - <b>neofetch</b>   : Displays system info with ASCII art<br>
                        - <b>systeminfo</b> : Shows detailed system configuration<br>
                        - <b>ipconfig</b>   : Displays network settings<br>
                        - <b>date / time</b>: Shows current system date and time<br>
                        - <b>echo [text]</b>: Prints the typed text on the screen<br>
                        - <b>dir / ls</b>   : Lists all projects from database<br>
                        - <b>cd [dir]</b>   : Change directory (e.g., cd Projects, cd ..)<br>
                        - <b>pwd</b>        : Print working directory<br>
                        - <b>color [hex]</b>: Changes terminal text color (e.g., color #00ff88)<br>
                        - <b>calc [math]</b>: Simple calculator (e.g., calc 5 * 10)<br>
                        - <b>history</b>    : Shows command history<br>
                        - <b>joke</b>       : Tells a random programmer joke<br>
                        - <b>roll</b>       : Rolls a 6-sided dice<br>
                        - <b>sudo</b>       : Execute a command as superuser<br>
                        - <b>clear / cls</b>: Clears the terminal screen<br>
                        - <b>exit</b>       : Closes the command prompt
                    `;
                    break;

                case 'about':
                    response = 'Mohammed Eto - 17yo Software Developer & Gamer.<br>Building Desktop Apps, Web Apps, and Discord Bots.<br>Passionate about coding, UI/UX, and solving complex problems.';
                    break;

                case 'whoami':
                    response = 'admin\\eto_master';
                    break;

                case 'neofetch':
                    response = `
<pre style="color: var(--os-primary); line-height: 1.2;">
   _____ _          ____   _____ 
  |  ___| |_ ___   / __ \\ / ____|
  | |__ | __/ _ \\ | |  | | (___  
  |  __|| || (_) || |  | |\\___ \\ 
  | |___| |_\\___/ | |__| |____) |
  |____/ \\__|      \\____/|_____/ 
</pre>
                        <b>OS:</b> Eto-OS v1.0.19045<br>
                        <b>Host:</b> Localhost Environment<br>
                        <b>Kernel:</b> Web-based JS Engine<br>
                        <b>Uptime:</b> Just started<br>
                        <b>Shell:</b> Eto-CMD<br>
                        <b>Resolution:</b> ${window.innerWidth}x${window.innerHeight}<br>
                        <b>Terminal:</b> HTML/CSS/JS Emulator<br>
                        <b>CPU:</b> Brain.exe (running at 100%)<br>
                        <b>Memory:</b> Endless limits
                    `;
                    break;

                case 'systeminfo':
                    response = `
                        Host Name:                 ETO-DEV-MACHINE<br>
                        OS Name:                   Microsoft Windows 10 Pro (Simulated)<br>
                        OS Version:                10.0.19045 N/A Build 19045<br>
                        System Manufacturer:       Eto Host Corp.<br>
                        System Type:               x64-based PC<br>
                        Processor(s):              1 Processor(s) Installed.<br>
                                                   [01]: AMD Ryzen 7 5800X 8-Core Processor<br>
                        Total Physical Memory:     32,692 MB
                    `;
                    break;

                case 'ipconfig':
                    response = `
                        Windows IP Configuration<br><br>
                        Ethernet adapter Ethernet:<br><br>
                           Connection-specific DNS Suffix  . : localdomain<br>
                           IPv4 Address. . . . . . . . . . . : 192.168.1.104<br>
                           Subnet Mask . . . . . . . . . . . : 255.255.255.0<br>
                           Default Gateway . . . . . . . . . : 192.168.1.1
                    `;
                    break;

                case 'cd':
                    if (!commandArgs) {
                        response = currentDir;
                    } else if (commandArgs === '..') {
                        let parts = currentDir.split('\\');
                        if (parts.length > 1) {
                            parts.pop();
                            currentDir = parts.join('\\');
                        }
                    } else if (commandArgs === '\\' || commandArgs === '/') {
                        currentDir = 'C:';
                    } else {
                        currentDir = `${currentDir}\\${commandArgs}`;
                    }
                    updatePrompt();
                    break;

                case 'pwd':
                    response = currentDir;
                    break;

                case 'date':
                case 'time':
                    response = new Date().toString();
                    break;

                case 'echo':
                    response = commandArgs;
                    break;

                case 'color':
                    if (commandArgs) {
                        terminal.style.color = commandArgs;
                        response = `Terminal color successfully changed to <span style="color:${commandArgs}">${commandArgs}</span>`;
                    } else {
                        response = 'Please specify a color. Example: color red, color #00ff88';
                    }
                    break;

                case 'history':
                    response = commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('<br>');
                    break;

                case 'calc':
                    if (commandArgs) {
                        try {

                            let result = new Function('return ' + commandArgs)();
                            response = `${commandArgs} = <b>${result}</b>`;
                        } catch (e) {
                            response = '<span style="color: #ff5f56;">Error: Invalid mathematical expression.</span>';
                        }
                    } else {
                        response = 'Usage: calc [expression]. Example: calc 5+5';
                    }
                    break;

                case 'joke':
                    const jokes = [
                        "Why do programmers prefer dark mode? Because light attracts bugs.",
                        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
                        "There are 10 types of people in the world: those who understand binary, and those who don't.",
                        "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
                        "I would love to change the world, but they won't give me the source code."
                    ];
                    response = jokes[Math.floor(Math.random() * jokes.length)];
                    break;

                case 'roll':
                    const dice = Math.floor(Math.random() * 6) + 1;
                    response = `🎲 You rolled a <b>${dice}</b>!`;
                    break;

                case 'sudo':
                    response = '<span style="color: #ffbd2e;">nice try... but you have no power here. 😂</span>';
                    break;

                case 'dir':
                case 'ls':
                    response = `Directory of ${currentDir}<br><br>`;
                    try {
                        const res = await fetch('projects.json');
                        const data = await res.json();
                        
                        let projectCount = 0;
                        for (let key in data) {
                            projectCount++;
                            let type = data[key].requirements.toLowerCase().includes('windows') ? '<EXE>' : '<DIR>';
                            let size = data[key].size !== "N/A (Web)" ? data[key].size : "Web App";
                            
                            response += `01/01/2026  12:00 AM    ${type}    ${size.padEnd(10, ' ')} ${data[key].name}<br>`;
                        }
                        response += `<br>    ${projectCount} File(s) found.`;
                    } catch (err) {
                        response = '<span style="color: #ff5f56;">Error: Could not read directory (Ensure you are running on a local server like Live Server).</span>';
                    }
                    break;

                case 'cls':
                case 'clear':
                    terminal.innerHTML = `
                        <div>Microsoft Windows [Version 10.0.19045.Eto]</div>
                        <div>(c) Mohammed Eto. All rights reserved.</div>
                    `;
                    terminal.appendChild(inputLine);
                    this.value = '';
                    cmdInput.focus();
                    skipDefaultPrint = true; 
                    break;

                case 'hack':
                    response = '<span style="color: #ff5f56;">[!] ACCESS DENIED. INITIATING COUNTER-HACK SEQUENCE... JUST KIDDING! 🛑</span>';
                    break;

                case 'ping':
                    let target = commandArgs || 'eto.io';
                    response = `Pinging ${target} with 32 bytes of data:<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br><br>
                                Ping statistics for ${target}:<br>
                                    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`;
                    break;

                case 'exit':

                    document.getElementById('terminal-window').style.display = 'none';
                    if (typeof updateTaskbar === 'function') updateTaskbar(); 
                    skipDefaultPrint = true;
                    this.value = '';
                    break;

                default:
                    response = `'${command}' is not recognized as an internal or external command,<br>operable program or batch file. Type 'help' for available commands.`;
            }

            if (!skipDefaultPrint) {
                const outputNode = document.createElement('div');
                outputNode.style.marginBottom = '12px';
                outputNode.innerHTML = `${currentDir}> ${fullCommand}<br><span style="color: #e0e0e0; font-family: inherit;">${response}</span>`;
                
                terminal.insertBefore(outputNode, inputLine);
            }

            this.value = '';

            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});