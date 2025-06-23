// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 导航切换功能
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            // 移除所有激活状态
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));

            // 添加当前激活状态
            this.classList.add('active');
            const target = this.getAttribute('data-target');
            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add('active');
            } else {
                console.warn(`未找到目标区域: ${target}`);
            }
        });
    });

    // 挑战卡片悬停效果增强
    document.querySelectorAll('.challenge-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    const aboutUsLink = document.getElementById('about-us-link');
    if (aboutUsLink) {
        aboutUsLink.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认链接行为
            showAboutUs();
        });
    }
    // 按钮点击效果
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // 根据按钮类型执行不同操作
            if (this.classList.contains('btn-primary')) {
                console.log('开始挑战按钮被点击');
                showChallengeModal(this);
            } else if (this.classList.contains('btn-secondary')) {
                console.log('查看题解按钮被点击');
                showSolutionModal(this);
            }
        });
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function (e) {
        const activeNav = document.querySelector('.nav-item.active');
        const navItems = Array.from(document.querySelectorAll('.nav-item'));
        const currentIndex = navItems.indexOf(activeNav);

        switch (e.key) {
            case 'ArrowLeft':
                if (currentIndex > 0) {
                    navItems[currentIndex - 1].click();
                }
                break;
            case 'ArrowRight':
                if (currentIndex < navItems.length - 1) {
                    navItems[currentIndex + 1].click();
                }
                break;
        }
    });

    // 初始化工具提示
    // initTooltips();
});

// 显示挑战模态框
function showChallengeModal(button) {
    const card = button.closest('.challenge-card');
    const title = card.querySelector('h3').textContent;
    // 1
    if (title.toLowerCase().includes('leak')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/1.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 2
    if (title.toLowerCase().includes('ez shellcode')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/2.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 3
    if (title.toLowerCase().includes('canary')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/3.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 4
    if (title.toLowerCase().includes('pie')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/4.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 5
    if (title.toLowerCase().includes('rop链')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/5.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 6
    if (title.toLowerCase().includes('syscall')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/6.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 7
    if (title.toLowerCase().includes('ret2libc')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/7.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 8
    if (title.toLowerCase().includes('orw')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/8.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 9
    if (title.toLowerCase().includes('侧信道攻击')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/9.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 10
    if (title.toLowerCase().includes('格式化字符串读取')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/10.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 11
    if (title.toLowerCase().includes('格式化字符串写入')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/11.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 12
    if (title.toLowerCase().includes('srop')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/12.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 13
    if (title.toLowerCase().includes('csu')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/13.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 14
    if (title.toLowerCase().includes('use')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/14.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 15
    if (title.toLowerCase().includes('double free')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/15.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    // 16
    if (title.toLowerCase().includes('orange')) {
        const downloadUrl = 'https://github.com/Sally-0000/pwn_web/releases/download/pwn%E9%A2%98/16.zip';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'ezstack';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    
}
// 显示题解模态框
function showSolutionModal(button) {
    const card = button.closest('.challenge-card');
    const title = card.querySelector('h3').textContent;

    const baseUrl = 'https://sally-0000.github.io/2025/06/22/pwn%E5%85%A5%E9%97%A8%E7%BB%83%E4%B9%A0%E5%B9%B3%E5%8F%B0wp/';

    // 1
    if (title.toLowerCase().includes('leak')) {
        window.open(baseUrl + '#ez_leak', '_blank');
        return;
    }
    // 2
    if (title.toLowerCase().includes('ez shellcode')) {
        window.open(baseUrl + '#EZ-Shellcode', '_blank');
        return;
    }
    // 3
    if (title.toLowerCase().includes('canary')) {
        window.open(baseUrl + '#绕过Canary', '_blank');
        return;
    }
    // 4
    if (title.toLowerCase().includes('pie')) {
        window.open(baseUrl + '#PIE', '_blank');
        return;
    }
    // 5
    if (title.toLowerCase().includes('rop链')) {
        window.open(baseUrl + '#ROP链', '_blank');
        return;
    }
    // 6
    if (title.toLowerCase().includes('syscall')) {
        window.open(baseUrl + '#ret2syscall', '_blank');
        return;
    }
    // 7
    if (title.toLowerCase().includes('ret2libc')) {
        window.open(baseUrl + '#ret2libc', '_blank');
        return;
    }
    // 8
    if (title.toLowerCase().includes('orw')) {
        window.open(baseUrl + '#orw', '_blank');
        return;
    }
    // 9
    if (title.toLowerCase().includes('侧信道攻击')) {
        window.open(baseUrl + '#侧信道攻击', '_blank');
        return;
    }
    // 10
    if (title.toLowerCase().includes('格式化字符串读取')) {
        window.open(baseUrl + '#格式化字符串读取', '_blank');
        return;
    }
    // 11
    if (title.toLowerCase().includes('格式化字符串写入')) {
        window.open(baseUrl + '#格式化字符串写入', '_blank');
        return;
    }
    // 12
    if (title.toLowerCase().includes('srop')) {
        window.open(baseUrl + '#SROP攻击', '_blank');
        return;
    }
    // 13
    if (title.toLowerCase().includes('csu')) {
        window.open(baseUrl + '#ret2csu', '_blank');
        return;
    }
    // 14
    if (title.toLowerCase().includes('use')) {
        window.open(baseUrl + '#UAF', '_blank');
        return;
    }
    // 15
    if (title.toLowerCase().includes('double free')) {
        window.open(baseUrl + '#double - Free', '_blank');
        return;
    }
    // 16
    if (title.toLowerCase().includes('orange')) {
        window.open(baseUrl + '#house-of-orange', '_blank');
        return;
    }
}

function showAboutUs() {
    const aboutText = `
    QQ：4
    `;

    alert(aboutText);
}