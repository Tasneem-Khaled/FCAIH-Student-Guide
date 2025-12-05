const stepsCarousel = document.querySelector('.steps-show');
const metroBtn = document.querySelector('.Metro-btn');
const admissionBtn = document.querySelector('.Admission-btn');

admissionBtn.addEventListener('click', () => {
    let cartoona = '';
    cartoona += `<div id="freshmanDocsCarousel" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="6"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="7"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="8"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="9"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="10"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="11"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="12"></button>
    </div>

    <div class="carousel-inner">

        <div class="carousel-item active">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">1</span></h3>
                    <p>أصل شهادة الثانوية العامة وصور منها.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">2</span></h3>
                    <p>شهادة ميلاد كمبيوتر حديثة و5 صور منها.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">3</span></h3>
                    <p>عدد 2 صورة من البطاقة الشخصية.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">4</span></h3>
                    <p>عدد 4 صور شخصية حديثة مع كتابة اسم الطالب.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">5</span></h3>
                    <p>بطاقة الترشيح و5 صور منها.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">6</span></h3>
                    <p>طلب الالتحاق مطبوع من على الإنترنت.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">7</span></h3>
                    <p>نموذج 2 جند للذكور.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">8</span></h3>
                    <p>بطاقة 6 أو 7 جند لمواليد 2007 وما قبلها.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">9</span></h3>
                    <p>إيصال سداد المصروفات وصورة منه.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">10</span></h3>
                    <p>دمغة فئة 2 جنيه تلصق بالشهادة.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">11</span></h3>
                    <p>استمارة الكشف الطبي بعد السداد.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">12</span></h3>
                    <p>أصل نتيجة الحافز الرياضي إن وجدت.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">13</span></h3>
                    <p>مراجعة الملف والتأكد من استيفاء المستندات.</p>
                </div>
            </div>
        </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide="prev">
        <i class="fa-solid fa-angle-left" style="color: #e2a606; font-size: 1.875rem;"></i>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide="next">
        <i class="fa-solid fa-angle-right" style="color: #e2a606; font-size: 1.875rem;"></i>
    </button>

</div>`;
    stepsCarousel.innerHTML = cartoona;
});

metroBtn.addEventListener('click', () => {
    let cartoona = '';
    cartoona += `<div id="freshmanDocsCarousel" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="6"></button>
        <button type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide-to="7"></button>
    </div>

    <div class="carousel-inner">

        <div class="carousel-item active">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">1</span></h3>
                    <p>شراء استمارة الاشتراك الخاصة بالطلبة ووضع عدد 2 صورة شخصية 4×6 عليها.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">2</span></h3>
                    <p>ختم الصورة الأولى على وجه الاستمارة وختم الصورة الثانية من الخلف.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">3</span></h3>
                    <p>اعتماد الاستمارة بختم الجمهورية من شؤون الطلبة.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">4</span></h3>
                    <p>إرفاق صورة بطاقة الرقم القومي للطالب (فوق 17 سنة).</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">5</span></h3>
                    <p>إرفاق صورة إيصال المصاريف الدراسية للعام الحالي.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">6</span></h3>
                    <p>كتابة رقم موبايل الطالب على الاستمارة للضرورة.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">7</span></h3>
                    <p>التوجه لأقرب مكتب اشتراكات بالمحطات لاستخراج الاشتراك.</p>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="d-flex justify-content-center">
                <div class="step-card w-75 text-center">
                    <h3>Step <span style="color: #e2a606;">8</span></h3>
                    <p>يُستخدم الاشتراك لحامله فقط حتى لا تتعرض لغرامة مالية.</p>
                </div>
            </div>
        </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide="prev">
        <i class="fa-solid fa-angle-left" style="color: #e2a606; font-size: 1.875rem;"></i>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#freshmanDocsCarousel" data-bs-slide="next">
        <i class="fa-solid fa-angle-right" style="color: #e2a606; font-size: 1.875rem;"></i>
    </button>

</div>
`;
    stepsCarousel.innerHTML = cartoona;
});