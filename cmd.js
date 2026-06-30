document.addEventListener('DOMContentLoaded', () => {
    const cmdInput = document.getElementById('cmd-input');
    const terminal = document.getElementById('terminal-content');
    const inputLine = document.querySelector('.terminal-input-line');

    terminal.addEventListener('click', () => cmdInput.focus());

    cmdInput.addEventListener('keypress', async function (e) {
        if (e.key === 'Enter') {
            const fullCommand = this.value.trim();
            if (!fullCommand) return;

            const args = fullCommand.split(' ');
            const command = args[0].toLowerCase();
            const commandArgs = args.slice(1).join(' ');

            let response = '';

            switch (command) {
                case 'help':
                    response = `
                        Available commands:<br>
                        - <b>help</b>: Shows this message<br>
                        - <b>about</b>: Displays developer info<br>
                        - <b>whoami</b>: Shows current user logged in<br>
                        - <b>date</b> or <b>time</b>: Shows current system date and time<br>
                        - <b>echo [text]</b>: Prints the typed text on the screen<br>
                        - <b>dir</b> or <b>ls</b>: Lists all projects from database<br>
                        - <b>color [color]</b>: Changes terminal text color (e.g., color red, color #00ff88)<br>
                        - <b>cls</b> or <b>clear</b>: Clears the terminal screen
                    `;
                    break;

                case 'about':
                    response = 'Mohammed Eto - 17yo Software Developer & Gamer.<br>Building Desktop Apps, Web Apps, and Discord Bots.';
                    break;

                case 'whoami':
                    response = 'admin\\guest_user';
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
                        response = `Terminal color successfully changed to ${commandArgs}`;
                    } else {
                        response = 'Please specify a color. Example: color red';
                    }
                    break;

                case 'dir':
                case 'ls':
                    response = 'Scanning C:\\Users\\Eto\\Projects...<br><br>';
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
                        response = '<span style="color: #ff5f56;">Error: Could not read directory (projects.json not found or server error).</span>';
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
                    return;

                case 'hack':
                    response = '<span style="color: #ff5f56;">Access Denied. Security systems activated! 🛑</span>';
                    break;

                case 'ping':
                    response = `Pinging eto.io with 32 bytes of data:<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br>
                                Reply from 127.0.0.1: bytes=32 time<1ms TTL=128<br>
                                Ping statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)`;
                    break;

                default:
                    response = `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
            }

            const outputNode = document.createElement('div');
            outputNode.style.marginBottom = '12px';
            outputNode.innerHTML = `C:\\Users\\Eto> ${fullCommand}<br><span style="color: #e0e0e0; font-family: inherit;">${response}</span>`;
            
            terminal.insertBefore(outputNode, inputLine);

            this.value = '';
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});