// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const wrapper = document.getElementById('envelopeWrapper');
    const hint = document.getElementById('hint');

    // 打开/关闭状态
    let isOpen = false;

    // 点击切换信封状态
    wrapper.addEventListener('click', function (e) {
        // 防止点到内部元素时重复触发（但事件冒泡到wrapper，我们直接切换）
        e.stopPropagation();
        toggleEnvelope();
    });

    // 也可以用键盘支持（可选项）
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleEnvelope();
        }
    });

    function toggleEnvelope() {
        isOpen = !isOpen;
        if (isOpen) {
            envelope.classList.add('open');
            hint.textContent = '📩 合上信封';
        } else {
            envelope.classList.remove('open');
            hint.textContent = '✉️ 点击信封打开';
        }
    }

    // 初始加载时，加一点点延迟后显示提示（可选）
    setTimeout(() => {
        hint.style.opacity = '1';
    }, 300);
});