document.addEventListener('DOMContentLoaded', function () {
    // 모달 열기 버튼 클릭 이벤트
    document.querySelectorAll('.open-modal').forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal-id');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
            }
        });
    });

    // 모달 닫기 버튼 및 모달 영역 외부 클릭 이벤트
    document.querySelectorAll('.btn-modal-close, .modal-wrap').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelectorAll('.modal-wrap').forEach(function (modal) {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
            // window.removeEventListener("wheel", removeDefaultEvent);
        });
    });

    // 모달 내부 클릭 시 모달 닫힘 방지
    document.querySelectorAll('.modal-content').forEach(function (modalContent) {
        modalContent.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});

