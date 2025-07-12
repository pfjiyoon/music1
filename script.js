document.addEventListener('DOMContentLoaded', () => {
    // Chart.js 공통 설정 (툴팁 및 범례 스타일)
    const chartJsConfig = {
        plugins: {
            legend: {
                labels: {
                    color: '#EFEFEF', // 범례 텍스트 색상
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        const item = tooltipItems[0];
                        let label = item.chart.data.labels[item.dataIndex];
                        if (Array.isArray(label)) {
                            return label.join(' ');
                        } else {
                            return label;
                        }
                    }
                }
            }
        }
    };
    
    // 레이더 차트 생성
    const radarCtx = document.getElementById('styleRadarChart').getContext('2d');
    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['기교 (Virtuosity)', '감성 (Emotion)', '규모 (Scale)', '섬세함 (Delicacy)', '대중성 (Showmanship)'],
            datasets: [{
                label: '쇼팽 (Chopin)',
                data: [7, 9, 4, 10, 6],
                backgroundColor: 'rgba(62, 146, 204, 0.4)', // 푸른 계열 배경
                borderColor: 'rgba(62, 146, 204, 1)', // 푸른 계열 테두리
                pointBackgroundColor: 'rgba(62, 146, 204, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(62, 146, 204, 1)'
            }, {
                label: '리스트 (Liszt)',
                data: [10, 7, 9, 5, 10],
                backgroundColor: 'rgba(216, 49, 91, 0.4)', // 붉은 계열 배경
                borderColor: 'rgba(216, 49, 91, 1)', // 붉은 계열 테두리
                pointBackgroundColor: 'rgba(216, 49, 91, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(216, 49, 91, 1)'
            }]
        },
        options: {
            ...chartJsConfig, // 공통 설정 적용
            maintainAspectRatio: false, // 컨테이너 크기에 맞춰 조절
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.2)' }, // 각도 선 색상
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }, // 그리드 선 색상
                    pointLabels: {
                        color: '#EFEFEF', // 포인트 레이블 (축 이름) 색상
                        font: { size: 12 }
                    },
                    ticks: {
                        color: '#EFEFEF', // 틱 값 (숫자) 색상
                        backdropColor: 'rgba(0, 0, 0, 0.5)', // 틱 값 배경색
                        stepSize: 2 // 틱 간격
                    }
                }
            }
        }
    });

    // 쇼팽 도넛 차트 생성
    const chopinDonutCtx = document.getElementById('chopinDonutChart').getContext('2d');
    new Chart(chopinDonutCtx, {
        type: 'doughnut',
        data: {
            labels: ['피아노 독주곡', '기타'],
            datasets: [{
                data: [95, 5],
                backgroundColor: ['#3E92CC', '#1B477D'], // 푸른 계열 색상
                borderColor: '#0A2463', // 테두리 색상
                borderWidth: 2,
            }]
        },
        options: { ...chartJsConfig, maintainAspectRatio: false } // 공통 설정 및 반응형 적용
    });

    // 리스트 도넛 차트 생성
    const lisztDonutCtx = document.getElementById('lisztDonutChart').getContext('2d');
    new Chart(lisztDonutCtx, {
        type: 'doughnut',
        data: {
            labels: ['피아노 독주곡', '교향시/관현악곡', '기타'],
            datasets: [{
                data: [50, 35, 15],
                backgroundColor: ['#D8315B', '#8C1C3A', '#4D1020'], // 붉은 계열 색상
                borderColor: '#0A2463', // 테두리 색상
                borderWidth: 2,
            }]
        },
        options: { ...chartJsConfig, maintainAspectRatio: false } // 공통 설정 및 반응형 적용
    });
});