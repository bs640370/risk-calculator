function predict() {
  let age = parseFloat(document.getElementById("age").value);
  let bp = parseFloat(document.getElementById("bp").value);

  // ==== 在这里替换成你自己的模型系数 ====
  let intercept = -3;
  let beta_age = 0.05;
  let beta_bp = 0.1;

  // Logistic 回归公式
  let logit = intercept + beta_age * age + beta_bp * bp;
  let p = 1 / (1 + Math.exp(-logit));

  // 输出结果
  let result = document.getElementById("result");
  result.innerText = "预测风险概率: " + (p*100).toFixed(1) + "%";

  if (p >= 0.5) {
    result.className = "high";
    result.innerText += " （高风险）";
  } else {
    result.className = "low";
    result.innerText += " （低风险）";
  }
}
