module.exports = [
    {
      id: "valuationFeePaid",
      description: "Valuation Fee Paid",
      evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
      id: "ukResident",
      description: "UK Resident",
      evaluate: (data) => data.isUkResident === true,
    },
    {
      id: "riskRatingMedium",
      description: "Risk Rating Medium",
      evaluate: (data) => data.riskRating === "Medium",
    },
    {
      id: "ltvBelow60",
      description: "LTV Below 60%",
      evaluate: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
    {
        id: "newCondition",
        description: "Your new condition description",
        evaluate: (data) => {
          // Logic to evaluate the condition
        },
      }
      
  ];
  