document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer 초기화
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.2 } // 조정 필요 시 변경
    );

    // 애니메이션을 적용할 요소들
    const targetElements = document.querySelectorAll(".fade-wrap");
    targetElements.forEach((element) => {
        observer.observe(element);
    });

    // 그래프 애니메이션 추가
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
        bar.style.setProperty('--height', `${bar.getAttribute('data-value') / 100}px`); // 데이터 값에 따라 높이 설정
        bar.classList.add('animate'); // 애니메이션을 적용
    });
});
