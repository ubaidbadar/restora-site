/** What Restora does today, grouped as an owner thinks of it. Everything here is in the product now. */
const FEATURES = [
  {
    id: 'orders',
    icon: 'orders',
    title: 'Orders, from counter to kitchen',
    summary: 'Take dine-in, takeaway and delivery orders on a phone, tablet or laptop. Every order moves from new to preparing, ready and done on one board.',
    points: ['Sizes, add-ons and notes per dish', 'Kitchen slips and receipts print in one tap', 'Edit dishes until the bill is paid', 'Daily order numbers staff can call out'],
  },
  {
    id: 'tables',
    icon: 'tables',
    title: 'Tables with QR codes',
    summary: 'Each table gets its own QR code. Guests see your menu on their phone and can call a waiter or ask for the bill, and your staff see it at once.',
    points: ['Printable QR cards for every table', 'Busy and free tables at a glance', 'Scan a table to start its order', 'Bookings shown on the table they are for'],
  },
  {
    id: 'khata',
    icon: 'khata',
    title: 'Khata, built in',
    summary: 'Put a bill on a customer\'s khata, take part payments, and send them their statement on WhatsApp. No more notebook.',
    points: ['Who owes what, at a glance', 'Part payments in cash or digital', 'Statement on WhatsApp or printed', 'Every change recorded with who made it'],
  },
  {
    id: 'customers',
    icon: 'customers',
    title: 'Customers who come back',
    summary: 'Every customer is saved with their number, their orders and what they spend. See who has not come back in a month and message them on WhatsApp.',
    points: ['Find anyone by number or name', 'Regulars, VIPs and slipping customers', 'Import your existing list', 'WhatsApp receipts and messages'],
  },
  {
    id: 'offline',
    icon: 'offline',
    title: 'Works when the internet does not',
    summary: 'Orders keep going when the connection drops. They are saved on the device and sent when it is back, so a slow evening never stops the counter.',
    points: ['New orders offline, with their own numbers', 'Sends by itself when back online', 'Shows what is waiting to send', 'Works on slow mobile data'],
  },
  {
    id: 'team',
    icon: 'team',
    title: 'Your team, your branches',
    summary: 'Invite staff by email or WhatsApp and choose what each person can do. Run several branches and see all of them from one place.',
    points: ['Owner, manager, cashier, waiter and kitchen roles', 'POS PIN for shared counters', 'Switch branch in one tap', 'Today\'s numbers for every branch'],
  },
  {
    id: 'menu',
    icon: 'menu',
    title: 'Menu and stock',
    summary: 'Categories, dishes with half and full sizes, add-ons like raita or extra cheese, and a switch for "sold out today" per branch.',
    points: ['Start from sample dishes', 'Sold out in one branch, not all', 'Hide a dish without deleting it', 'The same menu on the QR code'],
  },
  {
    id: 'payments',
    icon: 'payments',
    title: 'Payments and tax, the Pakistani way',
    summary: 'Cash, card, JazzCash, Easypaisa or bank transfer, with tax set per payment method. Today\'s sales, cash vs digital and what is still to collect.',
    points: ['Tax by payment method', 'Discounts with permission', 'Cash vs digital every day', 'Unpaid and khata kept apart'],
  },
] as const;

export default FEATURES;
