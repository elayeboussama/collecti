import { CardField, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';

function PaymentScreen({ navigation, route }) {
  const values = route.params.values
  const stack = route.params.stack
  const [donate, {isLoading}]=useDonateMutation();
  const handlepayment=async()=>{
    await donate({
      ...values,
    }).unwrap();
    navigation.navigate("EventProfile",{item:item, user:user, stack:"Home"})
}  // ...



const fetchPaymentIntentClientSecret = async () => {
  const response = await fetch(`${API_URL}/create-payment-intent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currency: 'usd',
    }),
  });
  const {clientSecret} = await response.json();
  return clientSecret;
};

const {confirmPayment, loading} = useConfirmPayment();
const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails= BillingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    }
  

  // Fetch the intent client secret from the backend.
  //const clientSecret = await fetchPaymentIntentClientSecret();
};

return (
  <View>
    <CardField
      postalCodeEnabled={false}
      placeholder={{
        number: '4242 4242 4242 4242',
      }}
      onCardChange={(cardDetails) => console.log('cardDetails', cardDetails)}
    />
    <Button onPress={handlePayPress} title="Pay" disabled={loading} />
  </View>
);
  // return (
  //   <View>
  //     <CardField
  //       postalCodeEnabled={false}
  //       placeholder={{
  //         number: '4242 4242 4242 4242',
  //       }}
  //       onCardChange={(cardDetails) => {
  //         console.log('cardDetails', cardDetails);
  //       }}
  //     />
  //   </View>
  // );
}


export default PaymentScreen;