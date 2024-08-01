

const Modal = () => {

    return (
        <div className='dimmed' onClick={}>
                    <section className={modal}>
                      <div className='modal-header'>
                        <div>
                          <p>스타벅스 럭키비키점</p>
                          <p>서울 중구 퇴계로 100</p>
                        </div>
                          <button onClick={}>X</button>
                        <div className='modal-body'>
                            <p>내 리뷰 작성하기</p>
                            <div>☆☆☆☆☆</div>
                            <textarea>장바구니,텀블러,다회용기 등 <br/>여러분의 경험을 공유해주세요.
                            (30자이상)
                            <div>0자</div>
                            </textarea>
                            <div>
                              
                            </div>
                        </div>
                      </div>  
                    </section>
                </div>
    )
}

export default Modal;