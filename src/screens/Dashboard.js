import React, { useState } from 'react';
import './Dashboard.css';

// SVG Icons (hollow/outline style)
const Icons = {
  dashboard: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1"/>
      <rect x="14" y="3" width="7" height="5" rx="1"/>
      <rect x="14" y="12" width="7" height="9" rx="1"/>
      <rect x="3" y="16" width="7" height="5" rx="1"/>
    </svg>
  ),
  bids: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  companies: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M9 8h1"/>
      <path d="M9 12h1"/>
      <path d="M9 16h1"/>
      <path d="M14 8h1"/>
      <path d="M14 12h1"/>
      <path d="M14 16h1"/>
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
    </svg>
  ),
  contracts: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
  payments: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  reports: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  budget: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  trending: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  complexity: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

// Services aligned with SYS GUIDE Section 15
const SERVICE_TYPES = {
  MONTHLY_ACCOUNTING: 'Monthly Accounting & VAT',
  PAYROLL: 'Payroll (SimplePay)',
  MANAGEMENT_ACCOUNTS: 'Management Accounts',
  TAX_COMPLIANCE: 'Tax Compliance',
  VIRTUAL_CFO: 'Virtual CFO / Advisory',
  FUNDING_SUPPORT: 'Funding & Growth Support',
};

// Mock companies meeting SYS GUIDE criteria (Section 13)
// Min: R500K turnover, ≥5% growth, 1 director + 1 employee
const mockCompanies = [
  {
    id: 1,
    name: 'Solaris Tech Solutions',
    industry: 'Technology',
    turnover: 'R2.4M',
    growthRate: '12%',
    employees: 8,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL, SERVICE_TYPES.TAX_COMPLIANCE],
    budget: 'R18,000 - R28,000/mo',
    deadline: '2026-03-15',
    bids: 4,
    complexity: 'Medium',
    complexityScore: 65,
    accountingStack: 'Xero',
  },
  {
    id: 2,
    name: 'Karoo Agri Holdings',
    industry: 'Agriculture',
    turnover: 'R8.5M',
    growthRate: '8%',
    employees: 24,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.MANAGEMENT_ACCOUNTS, SERVICE_TYPES.VIRTUAL_CFO],
    budget: 'R35,000 - R55,000/mo',
    deadline: '2026-02-28',
    bids: 7,
    complexity: 'High',
    complexityScore: 82,
    accountingStack: 'Xero',
  },
  {
    id: 3,
    name: 'Reef Auto Group',
    industry: 'Automotive',
    turnover: 'R4.2M',
    growthRate: '6%',
    employees: 15,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL, SERVICE_TYPES.TAX_COMPLIANCE],
    budget: 'R22,000 - R38,000/mo',
    deadline: '2026-04-01',
    bids: 2,
    complexity: 'Medium',
    complexityScore: 58,
    accountingStack: 'Xero',
  },
  {
    id: 4,
    name: 'Urban Style Interiors',
    industry: 'Retail',
    turnover: 'R1.8M',
    growthRate: '15%',
    employees: 6,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.TAX_COMPLIANCE],
    budget: 'R12,000 - R18,000/mo',
    deadline: '2026-03-20',
    bids: 5,
    complexity: 'Low',
    complexityScore: 35,
    accountingStack: 'Xero',
  },
  {
    id: 5,
    name: 'Highveld Construction',
    industry: 'Construction',
    turnover: 'R12M',
    growthRate: '9%',
    employees: 45,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.MANAGEMENT_ACCOUNTS, SERVICE_TYPES.PAYROLL, SERVICE_TYPES.VIRTUAL_CFO],
    budget: 'R45,000 - R70,000/mo',
    deadline: '2026-03-10',
    bids: 3,
    complexity: 'High',
    complexityScore: 88,
    accountingStack: 'Xero',
  },
  {
    id: 6,
    name: 'Medipark Healthcare',
    industry: 'Healthcare',
    turnover: 'R5.8M',
    growthRate: '11%',
    employees: 18,
    vatRegistered: true,
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL, SERVICE_TYPES.TAX_COMPLIANCE, SERVICE_TYPES.FUNDING_SUPPORT],
    budget: 'R28,000 - R42,000/mo',
    deadline: '2026-04-15',
    bids: 6,
    complexity: 'High',
    complexityScore: 75,
    accountingStack: 'Xero',
  },
];

// My submitted bids
const myBids = [
  {
    id: 1,
    company: 'Solaris Tech Solutions',
    industry: 'Technology',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL],
    bidAmount: 'R22,000/mo',
    submittedDate: '2026-02-08',
    status: 'pending',
    competingBids: 4,
  },
  {
    id: 2,
    company: 'Urban Style Interiors',
    industry: 'Retail',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.TAX_COMPLIANCE],
    bidAmount: 'R14,500/mo',
    submittedDate: '2026-02-05',
    status: 'accepted',
    competingBids: 5,
  },
  {
    id: 3,
    company: 'Cape Town Logistics',
    industry: 'Transport',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL, SERVICE_TYPES.MANAGEMENT_ACCOUNTS],
    bidAmount: 'R32,000/mo',
    submittedDate: '2026-02-01',
    status: 'rejected',
    competingBids: 8,
  },
];

// Active contracts
const myContracts = [
  {
    id: 1,
    company: 'Urban Style Interiors',
    industry: 'Retail',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.TAX_COMPLIANCE],
    monthlyFee: 'R14,500',
    startDate: '2026-02-01',
    status: 'active',
    nextDeliverable: 'Monthly VAT Return',
    dueDate: '2026-02-25',
    complexity: 'Low',
  },
  {
    id: 2,
    company: 'Ndlovu Transport',
    industry: 'Logistics',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.PAYROLL],
    monthlyFee: 'R28,000',
    startDate: '2025-11-01',
    status: 'active',
    nextDeliverable: 'Management Pack',
    dueDate: '2026-02-20',
    complexity: 'Medium',
  },
  {
    id: 3,
    company: 'Greenfields Produce',
    industry: 'Agriculture',
    services: [SERVICE_TYPES.MONTHLY_ACCOUNTING, SERVICE_TYPES.VIRTUAL_CFO],
    monthlyFee: 'R38,000',
    startDate: '2025-09-15',
    status: 'active',
    nextDeliverable: 'Cash Flow Forecast',
    dueDate: '2026-02-28',
    complexity: 'High',
  },
];

// Payment history
const payments = [
  { id: 1, company: 'Urban Style Interiors', amount: 'R14,500', date: '2026-02-01', status: 'paid', method: 'PayFast' },
  { id: 2, company: 'Ndlovu Transport', amount: 'R28,000', date: '2026-02-01', status: 'paid', method: 'PayFast' },
  { id: 3, company: 'Greenfields Produce', amount: 'R38,000', date: '2026-02-01', status: 'paid', method: 'Paystack' },
  { id: 4, company: 'Urban Style Interiors', amount: 'R14,500', date: '2026-01-01', status: 'paid', method: 'PayFast' },
  { id: 5, company: 'Ndlovu Transport', amount: 'R28,000', date: '2026-01-01', status: 'paid', method: 'PayFast' },
  { id: 6, company: 'Greenfields Produce', amount: 'R38,000', date: '2026-01-01', status: 'paid', method: 'Paystack' },
];

const menuItems = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'bids', label: 'My Bids' },
  { icon: 'companies', label: 'Opportunities' },
  { icon: 'contracts', label: 'Contracts' },
  { icon: 'payments', label: 'Payments' },
  { icon: 'reports', label: 'Reports' },
  { icon: 'settings', label: 'Settings' },
];

// Complexity badge component
const ComplexityBadge = ({ level, score }) => {
  const colors = {
    Low: { bg: '#ecfdf5', text: '#059669' },
    Medium: { bg: '#fef3c7', text: '#d97706' },
    High: { bg: '#fee2e2', text: '#dc2626' },
  };
  const style = colors[level] || colors.Medium;
  return (
    <span className="complexity-badge" style={{ background: style.bg, color: style.text }}>
      {Icons.complexity} {level} ({score})
    </span>
  );
};

// Status badge component
const StatusBadge = ({ status }) => {
  const styles = {
    pending: { bg: '#fef3c7', text: '#d97706', label: 'Pending' },
    accepted: { bg: '#ecfdf5', text: '#059669', label: 'Accepted' },
    rejected: { bg: '#fee2e2', text: '#dc2626', label: 'Rejected' },
    active: { bg: '#dbeafe', text: '#2563eb', label: 'Active' },
    paid: { bg: '#ecfdf5', text: '#059669', label: 'Paid' },
  };
  const style = styles[status] || styles.pending;
  return (
    <span className="status-badge" style={{ background: style.bg, color: style.text }}>
      {style.label}
    </span>
  );
};

function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const [bidModal, setBidModal] = useState({ open: false, company: null });
  const [bidAmount, setBidAmount] = useState('');

  const handleBid = (company) => {
    setBidModal({ open: true, company });
    setBidAmount('');
  };

  const submitBid = () => {
    alert(`Bid of R${bidAmount}/mo submitted for ${bidModal.company.name}!`);
    setBidModal({ open: false, company: null });
  };

  // Dashboard Overview Screen
  const renderDashboard = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Dashboard Overview</h2>
          <p>Welcome back, Thabo. Here's your activity summary.</p>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">{Icons.contracts}</div>
          <div className="stat-content">
            <span className="stat-value">3</span>
            <span className="stat-label">Active Contracts</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon yellow">{Icons.bids}</div>
          <div className="stat-content">
            <span className="stat-value">1</span>
            <span className="stat-label">Pending Bids</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">{Icons.budget}</div>
          <div className="stat-content">
            <span className="stat-value">R80,500</span>
            <span className="stat-label">Monthly Revenue</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">{Icons.trending}</div>
          <div className="stat-content">
            <span className="stat-value">6</span>
            <span className="stat-label">New Opportunities</span>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section-card">
          <div className="section-header">
            <h3>Upcoming Deliverables</h3>
            <button className="link-btn" onClick={() => setSelectedMenu('Contracts')}>View All</button>
          </div>
          <div className="deliverables-list">
            {myContracts.map(contract => (
              <div key={contract.id} className="deliverable-item">
                <div className="deliverable-info">
                  <span className="company-name">{contract.company}</span>
                  <span className="deliverable-name">{contract.nextDeliverable}</span>
                </div>
                <div className="deliverable-due">
                  <span className="due-label">Due:</span>
                  <span className="due-date">{contract.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3>Recent Payments</h3>
            <button className="link-btn" onClick={() => setSelectedMenu('Payments')}>View All</button>
          </div>
          <div className="payments-list">
            {payments.slice(0, 3).map(payment => (
              <div key={payment.id} className="payment-item">
                <div className="payment-info">
                  <span className="company-name">{payment.company}</span>
                  <span className="payment-method">{payment.method}</span>
                </div>
                <div className="payment-amount">
                  <span className="amount">{payment.amount}</span>
                  <StatusBadge status={payment.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // My Bids Screen
  const renderMyBids = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>My Bids</h2>
          <p>Track your submitted proposals</p>
        </div>
      </header>

      <div className="bids-list">
        {myBids.map(bid => (
          <div key={bid.id} className="bid-card">
            <div className="bid-header">
              <div>
                <h3>{bid.company}</h3>
                <span className="industry-badge">{bid.industry}</span>
              </div>
              <StatusBadge status={bid.status} />
            </div>
            <div className="services-needed">
              <span className="label">Services:</span>
              <div className="service-tags">
                {bid.services.map((service, idx) => (
                  <span key={idx} className="service-tag">{service}</span>
                ))}
              </div>
            </div>
            <div className="bid-details">
              <div className="detail-row">
                <span className="detail-label">Your Bid:</span>
                <span className="detail-value highlight">{bid.bidAmount}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Submitted:</span>
                <span className="detail-value">{bid.submittedDate}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Competing Bids:</span>
                <span className="detail-value">{bid.competingBids}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Opportunities Screen (Companies)
  const renderOpportunities = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Available Opportunities</h2>
          <p>Companies looking for accounting services (R500K+ turnover, ≥5% growth)</p>
        </div>
        <div className="header-right">
          <div className="search-box">
            <span className="search-icon">{Icons.search}</span>
            <input type="text" placeholder="Search companies..." />
          </div>
          <select className="filter-select">
            <option>All Industries</option>
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Retail</option>
            <option>Healthcare</option>
            <option>Construction</option>
          </select>
          <select className="filter-select">
            <option>All Complexity</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </header>

      <div className="company-grid">
        {mockCompanies.map((company) => (
          <div key={company.id} className="company-card">
            <div className="card-header">
              <div>
                <h3>{company.name}</h3>
                <span className="industry-badge">{company.industry}</span>
              </div>
              <ComplexityBadge level={company.complexity} score={company.complexityScore} />
            </div>

            <div className="company-metrics">
              <div className="metric">
                <span className="metric-label">Turnover</span>
                <span className="metric-value">{company.turnover}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Growth</span>
                <span className="metric-value growth">{company.growthRate}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Employees</span>
                <span className="metric-value">{company.employees}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Platform</span>
                <span className="metric-value">{company.accountingStack}</span>
              </div>
            </div>
            
            <div className="services-needed">
              <span className="label">Services Required:</span>
              <div className="service-tags">
                {company.services.map((service, idx) => (
                  <span key={idx} className="service-tag">{service}</span>
                ))}
              </div>
            </div>

            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">
                  <span className="detail-icon">{Icons.budget}</span>
                  Budget:
                </span>
                <span className="detail-value">{company.budget}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  <span className="detail-icon">{Icons.calendar}</span>
                  Deadline:
                </span>
                <span className="detail-value">{company.deadline}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">
                  <span className="detail-icon">{Icons.users}</span>
                  Current Bids:
                </span>
                <span className="detail-value bids-count">{company.bids}</span>
              </div>
            </div>

            <button className="bid-button" onClick={() => handleBid(company)}>
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </>
  );

  // Contracts Screen
  const renderContracts = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Active Contracts</h2>
          <p>Your current client engagements</p>
        </div>
      </header>

      <div className="contracts-list">
        {myContracts.map(contract => (
          <div key={contract.id} className="contract-card">
            <div className="contract-header">
              <div>
                <h3>{contract.company}</h3>
                <span className="industry-badge">{contract.industry}</span>
              </div>
              <div className="contract-fee">
                <span className="fee-label">Monthly</span>
                <span className="fee-value">{contract.monthlyFee}</span>
              </div>
            </div>

            <div className="services-needed">
              <span className="label">Services:</span>
              <div className="service-tags">
                {contract.services.map((service, idx) => (
                  <span key={idx} className="service-tag">{service}</span>
                ))}
              </div>
            </div>

            <div className="contract-details">
              <div className="detail-row">
                <span className="detail-label">Complexity:</span>
                <ComplexityBadge level={contract.complexity} score={contract.complexity === 'Low' ? 35 : contract.complexity === 'Medium' ? 55 : 78} />
              </div>
              <div className="detail-row">
                <span className="detail-label">Start Date:</span>
                <span className="detail-value">{contract.startDate}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <StatusBadge status={contract.status} />
              </div>
            </div>

            <div className="next-deliverable">
              <div className="deliverable-header">
                <span className="deliverable-icon">{Icons.clock}</span>
                <span>Next Deliverable</span>
              </div>
              <div className="deliverable-content">
                <span className="deliverable-name">{contract.nextDeliverable}</span>
                <span className="deliverable-due">Due: {contract.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Payments Screen
  const renderPayments = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Payments</h2>
          <p>Your earnings via PayFast & Paystack</p>
        </div>
        <div className="header-right">
          <div className="earnings-summary">
            <div className="earning-item">
              <span className="earning-label">This Month</span>
              <span className="earning-value">R80,500</span>
            </div>
            <div className="earning-item">
              <span className="earning-label">Last Month</span>
              <span className="earning-value">R80,500</span>
            </div>
          </div>
        </div>
      </header>

      <div className="payments-table">
        <div className="table-header">
          <span>Company</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Method</span>
          <span>Status</span>
        </div>
        {payments.map(payment => (
          <div key={payment.id} className="table-row">
            <span className="company-cell">{payment.company}</span>
            <span className="amount-cell">{payment.amount}</span>
            <span>{payment.date}</span>
            <span className="method-cell">{payment.method}</span>
            <StatusBadge status={payment.status} />
          </div>
        ))}
      </div>
    </>
  );

  // Reports Screen (Placeholder)
  const renderReports = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Reports & Analytics</h2>
          <p>Performance insights and client metrics</p>
        </div>
      </header>
      <div className="placeholder-content">
        <div className="placeholder-icon">{Icons.reports}</div>
        <h3>Reports Coming Soon</h3>
        <p>AI-powered analytics and performance tracking will be available here.</p>
      </div>
    </>
  );

  // Settings Screen (Placeholder)
  const renderSettings = () => (
    <>
      <header className="main-header">
        <div className="header-left">
          <h2>Settings</h2>
          <p>Manage your profile and preferences</p>
        </div>
      </header>
      <div className="settings-content">
        <div className="settings-section">
          <h3>Profile Information</h3>
          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Thabo Molefe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="thabo.molefe@accounting.co.za" />
            </div>
            <div className="form-group">
              <label>Qualification</label>
              <input type="text" defaultValue="CA(SA)" />
            </div>
            <div className="form-group">
              <label>SAICA Number</label>
              <input type="text" defaultValue="12345678" />
            </div>
          </div>
        </div>
        <div className="settings-section">
          <h3>Industry Expertise</h3>
          <div className="expertise-tags">
            <span className="expertise-tag active">Technology</span>
            <span className="expertise-tag active">Retail</span>
            <span className="expertise-tag active">Agriculture</span>
            <span className="expertise-tag">Healthcare</span>
            <span className="expertise-tag">Construction</span>
            <span className="expertise-tag">Manufacturing</span>
          </div>
        </div>
        <div className="settings-section">
          <h3>Payment Details</h3>
          <div className="settings-form">
            <div className="form-group">
              <label>Bank Account</label>
              <input type="text" defaultValue="**** **** **** 4521" disabled />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select defaultValue="payfast">
                <option value="payfast">PayFast</option>
                <option value="paystack">Paystack</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render content based on selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Dashboard': return renderDashboard();
      case 'My Bids': return renderMyBids();
      case 'Opportunities': return renderOpportunities();
      case 'Contracts': return renderContracts();
      case 'Payments': return renderPayments();
      case 'Reports': return renderReports();
      case 'Settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="dashboard">
      {/* Side Panel */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">DidiServ</h1>
          <p className="tagline">Accounting Marketplace</p>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${selectedMenu === item.label ? 'active' : ''}`}
              onClick={() => setSelectedMenu(item.label)}
            >
              <span className="nav-icon">{Icons[item.icon]}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">TM</div>
            <div className="user-info">
              <span className="user-name">Thabo Molefe</span>
              <span className="user-role">CA(SA) · Vetted</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Bid Modal */}
      {bidModal.open && (
        <div className="modal-overlay" onClick={() => setBidModal({ open: false, company: null })}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Submit Bid</h3>
            <p>Bidding for: <strong>{bidModal.company?.name}</strong></p>
            
            <div className="modal-company-info">
              <div className="info-row">
                <span>Turnover:</span>
                <strong>{bidModal.company?.turnover}</strong>
              </div>
              <div className="info-row">
                <span>Complexity Score:</span>
                <strong>{bidModal.company?.complexityScore}</strong>
              </div>
              <div className="info-row">
                <span>Platform:</span>
                <strong>{bidModal.company?.accountingStack}</strong>
              </div>
            </div>

            <div className="modal-services">
              <span>Services requested:</span>
              <ul>
                {bidModal.company?.services.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>

            <div className="form-group">
              <label>Your Monthly Bid (ZAR)</label>
              <input
                type="number"
                placeholder="Enter monthly amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <span className="form-hint">Client budget: {bidModal.company?.budget}</span>
            </div>

            <div className="form-group">
              <label>Proposal Message</label>
              <textarea placeholder="Highlight your experience with similar clients, industry expertise, and service approach..."></textarea>
            </div>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setBidModal({ open: false, company: null })}>
                Cancel
              </button>
              <button className="btn-submit" onClick={submitBid} disabled={!bidAmount}>
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
