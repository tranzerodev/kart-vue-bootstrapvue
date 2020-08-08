const getPackage = store => (packageType, periodCode) => {
  if (store.servicePackageList && store.servicePackageList.length) {
    return store.servicePackageList.find(
      packageItem =>
        packageItem.subscription_type === packageType &&
        packageItem.payment_plan === periodCode
    )
  } else return false
}
export default {
  getPackage,
}
