# Telegram payment flow

1. /start
2. User selects category/package.
3. Bot creates an order.
4. User pays through the selected payment provider.
5. Payment webhook verifies the transaction server-side.
6. Order becomes PAID.
7. Bot sends a one-time secure login/session link.
8. Website opens the creation flow.
9. User creates and publishes a site.
10. Bot sends the public URL.

Important:
- Never trust a client-side “paid=true”.
- Store provider transaction ID.
- Make webhook processing idempotent.
- Verify payment signature/provider response.
- Use short-lived signed login tokens.
