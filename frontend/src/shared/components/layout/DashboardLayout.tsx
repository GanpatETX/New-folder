import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Briefcase,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
  Home,
  UserCheck,
  Bell,
  ChevronDown,
  LayoutGrid,
  User,
  LogOut,
} from 'lucide-react';
import { useAppStore } from '@/app/store';
import { GuildLogo } from '@/shared/components/GuildLogo';
import { ThemeToggle } from '@/shared/components/ui/ThemeToggle';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const theme = useAppStore((s) => s.theme);
  const activeTab = useAppStore((s) => s.activeTab);
  const user = useAppStore((s) => s.user);
  const setAppView = useAppStore((s) => s.setAppView);
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const setLogout = useAppStore((s) => s.setLogout);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', tab: 'dashboard' as const },
    { icon: FileText, label: 'Requisitions', tab: 'requisitions' as const },
    { icon: Briefcase, label: 'Jobs', tab: 'jobs' as const },
    { icon: Users, label: 'Candidates', tab: 'candidates' as const },
    { icon: CalendarDays, label: 'Interviews', tab: 'interviews' as const },
    { icon: UserCheck, label: 'Referrals', tab: 'referrals' as const },
    { icon: BarChart3, label: 'Analytics', tab: 'analytics' as const },
    { icon: Settings, label: 'Settings', tab: 'settings' as const },
  ];

  const handleLogout = () => {
    setLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Engineering Drawing Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat" />
        <svg className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-20" viewBox="0 0 200 200">
          <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="60" y="60" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="0.5" />
          <line x1="160" y1="40" x2="40" y2="160" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-[220px] flex-shrink-0 h-screen border-r border-border bg-card backdrop-blur-xl flex flex-col px-3 py-6 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="mb-10 flex items-center justify-center px-2 group">
              <button
                onClick={() => setAppView('erp-modules')}
                className="relative transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl p-2"
                title="Return to ERP Home"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 blur-xl" />
                <GuildLogo className="h-16 w-16 relative" theme={theme} />

                {/* Tooltip */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg z-50">
                  <div className="font-medium mb-0.5">Return to ERP Home</div>
                  <div className="text-[10px] text-background/70">Module Catalog</div>
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground" />
                </div>
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1 flex-1 overflow-y-auto scrollbar-thin pr-1">
              {sidebarItems.map((item) => {
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.tab)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                      isActive
                        ? 'bg-foreground/10 text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]'
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="tracking-wide">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Profile Section */}
          <div className="border-t border-border pt-4 relative">
            <div className="relative">
              {/* Profile Trigger Button */}
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-foreground/[0.06] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center text-[11px] font-semibold text-foreground">
                      {user?.name
                        ? user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                        : 'GM'}
                    </div>
                    {/* Status Dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-background" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs font-medium text-foreground truncate max-w-[90px]">
                      {user?.name || 'Gautham Mayur'}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate max-w-[90px]">
                      {user?.roles?.[0] || 'Chief Of Staff'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {/* Notifications Icon */}
                  <div className="relative p-1 rounded-md hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <Bell className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="absolute top-[3px] right-[3px] w-1.5 h-1.5 rounded-full bg-amber-400 border border-background" />
                  </div>

                  <ChevronDown
                    className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                      showProfileMenu ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute bottom-14 left-0 w-full rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-border/60">
                    <p className="text-sm font-medium text-foreground">
                      {user?.name || 'Gautham Mayur'}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                      {user?.email || 'gauthammayur.n@etherealx.in'}
                    </p>
                  </div>

                  <div className="p-1.5">
                    <button
                      onClick={() => {
                        setAppView('erp-modules');
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs hover:bg-foreground/[0.06] transition-colors text-left"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      Module Catalog
                    </button>

                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs hover:bg-foreground/[0.06] transition-colors text-left">
                      <User className="w-3.5 h-3.5" />
                      View Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs hover:bg-foreground/[0.06] transition-colors text-left text-red-400"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <header className="border-b border-border/50 bg-card/60 backdrop-blur-md shadow-sm flex-shrink-0">
            <div className="px-5 py-3 flex items-center justify-between">
              <h1
                className="text-xl tracking-tight"
                style={{
                  fontFamily: "'Fauna One', serif",
                  fontWeight: 100,
                  letterSpacing: '0.06em',
                }}
              >
                The Guild ATS
              </h1>

              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} setTheme={toggleTheme} />
              </div>
            </div>
          </header>

          {/* Render Page Children */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
