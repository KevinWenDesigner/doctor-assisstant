/**
 * 医生AI助手 - 主要JavaScript文件
 * 提供UI交互和功能支持
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化代码
    console.log('医生AI助手应用已加载');
    
    // 监听iframe加载完成事件
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            console.log(`${iframe.src} 已加载完成`);
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// AI诊断相关功能
class DiagnosisAssistant {
    constructor() {
        this.patientData = null;
        this.diagnosisResult = null;
    }

    // 设置患者数据
    setPatientData(data) {
        this.patientData = data;
        console.log('已设置患者数据:', data);
        return this;
    }

    // 分析症状
    analyzeSymptoms(symptoms) {
        console.log('分析症状:', symptoms);
        // 在实际应用中，这里会调用AI后端API
        // 这里仅作为演示
        return {
            mainSymptoms: symptoms,
            duration: '4天',
            severity: '中度',
            associatedSymptoms: ['咽干', '流涕', '气短']
        };
    }

    // 生成诊断结果
    generateDiagnosis() {
        console.log('生成诊断结果');
        // 在实际应用中，这里会基于AI模型分析
        // 这里使用示例数据
        this.diagnosisResult = {
            symptomAnalysis: [
                {
                    key: '主要症状',
                    value: '咳嗽、咳痰、咽痛4天伴咽干、流涕、气短'
                },
                {
                    key: '特点',
                    value: '受京后起病，无发热等全身症状'
                },
                {
                    key: '基础疾病',
                    value: 'COPD【慢性阻塞性肺病】病史2月规律使用布地奈德福莫特罗吸入剂'
                }
            ],
            differentialDiagnosis: [
                '急性上呼吸道感染（病毒性可能性大）',
                'COPD急性加重',
                '社区获得性肺炎（需排除）',
                '过敏性鼻炎/咽炎'
            ],
            dangerSigns: [
                '气短加重或出现呼吸困难',
                '发热超过38.5℃',
                '痰量明显增多或出现脓痰、血痰',
                '意识改变或血氧饱和度下降'
            ],
            recommendedTests: {
                required: [
                    '血常规+C反应蛋白',
                    '胸部X线【排除肺炎',
                    '指脉氧饱和度监测'
                ],
                optional: [
                    '肺功能检查【评估COPD控制情况',
                    '痰培养（如怀疑细菌感染）'
                ]
            },
            treatmentSuggestions: [
                {
                    category: '一般处理',
                    items: [
                        '适当增加水分摄入',
                        '保持室内空气流通',
                        '继续规律使用布地奈德福莫特罗吸入剂'
                    ]
                },
                {
                    category: '对症治疗',
                    items: [
                        '可考虑使用祛痰药物（如氨溴索）',
                        '咽痛可使用含片缓解症状',
                        '不推荐常规使用抗生素（除非有细菌感染证据）'
                    ]
                },
                {
                    category: '随访建议',
                    items: [
                        '如症状持续超过7天无改善或加重需复诊',
                        '如出现上述危险信号，需立即就医'
                    ]
                }
            ],
            medicalAdvice: [
                '建议尽快于呼吸内科门诊就诊',
                '就诊时请携带既往COPD诊断资料和用药记录'
            ],
            note: '由于患者有COPD基础疾病，即使症状看似轻微，也需警惕COPD急性加重的可能建议密切观察病情变化。当前建议不能替代实际面诊如有任何病情变化请及时就医。'
        };
        
        return this.diagnosisResult;
    }

    // 导出诊断报告
    exportReport() {
        console.log('导出诊断报告');
        // 实际应用中会生成PDF或其他格式的报告
        return true;
    }
}

// 创建全局诊断助手实例
window.diagnosisAssistant = new DiagnosisAssistant(); 