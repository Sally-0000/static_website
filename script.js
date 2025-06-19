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
    alert(`开始挑战: ${title}\n\n这里将打开挑战环境...`);
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
    alert(`查看题解: ${title}\n\n这里将显示详细题解...`);
}

function showAboutUs() {
    const aboutText = `
    QQ：491339386
    计科2401-xxxx
    `;

    alert(aboutText);
}