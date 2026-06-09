import { useMemo, useRef, useState } from 'react';
import { LayoutGrid, List, Search, Filter } from 'lucide-react';

import {
  mockRequisitions,
  requisitionStatuses,
  Requisition,
  RequisitionStatus,
} from '../../Data/Requisitions';

import { RequisitionKanbanBoard } from './RequisitionKanbanBoard';
import { RequisitionDetailModal } from './RequisitionDetailModal';
import { RequisitionListView } from './RequisitionListView';

export function RequisitionPage() {
  const [requisitions, setRequisitions] = useState(mockRequisitions);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [selectedRequisition, setSelectedRequisition] = useState<Requisition | null>(null);
  const [activeCategory, setActiveCategory] = useState<RequisitionStatus | 'All'>('All');
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const columnRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});

  const filteredRequisitions = useMemo(() => {
    let filtered = requisitions;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(req => req.status === activeCategory);
    }

    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter((req) =>
        [
          req.id,
          req.title,
          req.department,
          req.requester,
        ]
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [requisitions, searchTerm, activeCategory]);

  // Count requisitions by status
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    requisitionStatuses.forEach(status => {
      counts[status] = requisitions.filter(r => r.status === status).length;
    });
    return counts;
  }, [requisitions]);

  const handleStatusChange = (
    requisitionId: string,
    newStatus: RequisitionStatus
  ) => {
    setRequisitions((prev) =>
      prev.map((req) =>
        req.id === requisitionId
          ? {
              ...req,
              status: newStatus,
            }
          : req
      )
    );
  };

  const handleCategoryClick = (category: RequisitionStatus | 'All') => {
    setActiveCategory(category);
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-md shadow-sm flex-shrink-0">
        <div className="px-5 py-3">
          <div className="flex items-center justify-between">
            <h1
              className="text-xl tracking-tight"
              style={{ fontFamily: 'Space Grotesk, Medium', fontWeight: 120, letterSpacing: '0.02em' }}
            >
              Requistions
            </h1>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search requisitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-muted/30 border border-border rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-foreground/20 focus:bg-card transition-all duration-200"
                />
              </div>

              {/* Filter */}
              <button
                onClick={() => setShowFilterPanel(!showFilterPanel)}
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  showFilterPanel ? 'bg-foreground/15 shadow-sm' : 'hover:bg-foreground/[0.07]'
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>

              {/* View Toggle */}
              <div className="flex items-center gap-0.5 bg-muted/30 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('kanban')}
                  className={`p-1.5 rounded-md transition-all duration-200 ${
                    viewMode === 'kanban' ? 'bg-card shadow-sm' : 'hover:bg-foreground/[0.06]'
                  }`}
                  title="Kanban View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-card shadow-sm' : 'hover:bg-foreground/[0.06]'
                  }`}
                  title="List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => handleCategoryClick('All')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'All'
                  ? 'bg-foreground/15 text-foreground shadow-sm'
                  : 'hover:bg-foreground/[0.07] text-muted-foreground hover:text-foreground'
              }`}
            >
              All · {requisitions.length}
            </button>
            {requisitionStatuses.map((status) => (
              <button
                key={status}
                onClick={() => handleCategoryClick(status)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === status
                    ? 'bg-foreground/15 text-foreground shadow-sm'
                    : 'hover:bg-foreground/[0.07] text-muted-foreground hover:text-foreground'
                }`}
              >
                {status} · {statusCounts[status] || 0}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {viewMode === 'kanban' ? (
          <div className="p-5">
            <RequisitionKanbanBoard
              requisitions={filteredRequisitions}
              statuses={requisitionStatuses}
              onStatusChange={handleStatusChange}
              columnRefs={columnRefs}
              onRequisitionClick={setSelectedRequisition}
            />
          </div>
        ) : (
          <div className="p-5">
            <RequisitionListView
              requisitions={filteredRequisitions}
              onStatusChange={handleStatusChange}
              onRequisitionClick={setSelectedRequisition}
            />
          </div>
        )}
      </main>

      {selectedRequisition && (
        <RequisitionDetailModal
          requisition={selectedRequisition}
          onClose={() =>
            setSelectedRequisition(null)
          }
          onStatusChange={(status) => {
            handleStatusChange(
              selectedRequisition.id,
              status
            );

            setSelectedRequisition({
              ...selectedRequisition,
              status,
            });
          }}
        />
      )}
    </div>
  );
}

export default RequisitionPage;
