import { useMemo, useRef, useState, useEffect } from 'react';
import { LayoutGrid, List, Search } from 'lucide-react';
import { useRequisitionsQuery } from '../hooks/useATS';
import { requisitionStatuses } from '../../../shared/api/mocks/Requisitions';
import type { Requisition, RequisitionStatus } from '@/shared/types';

import { RequisitionKanbanBoard } from '../components/RequisitionKanbanBoard';
import { RequisitionDetailModal } from '../components/RequisitionDetailModal';

export function RequisitionPage() {
  const { data: serverRequisitions = [] } = useRequisitionsQuery();
  const [requisitions, setRequisitions] = useState<Requisition[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [selectedRequisition, setSelectedRequisition] = useState<Requisition | null>(null);

  // Sync with dynamic API/mock data once loaded
  useEffect(() => {
    if (serverRequisitions.length > 0) {
      setRequisitions(serverRequisitions);
    }
  }, [serverRequisitions]);

  const columnRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});

  const filteredRequisitions = useMemo(() => {
    return requisitions.filter((req) =>
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
  }, [requisitions, searchTerm]);

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

  return (
  <div className="h-full flex flex-col bg-background">
      {/* ATS Header */}

<div className="px-6 pt-6 pb-4">
  <div className="flex items-start justify-between gap-4">

    <div>
      <h2 className="text-xl font-semibold tracking-tight mb-0.5">Requisitions</h2>
      <p className="text-xs text-muted-foreground">
        {requisitions.length} requisitions across active hiring workflows
      </p>

      <div className="flex items-center gap-2 mt-4 text-xs overflow-x-auto pb-1 scrollbar-thin">

        <span className="px-3 py-1 rounded-lg bg-foreground/15 text-foreground font-medium whitespace-nowrap">
          All · {requisitions.length}
        </span>

        {requisitionStatuses.map((status) => (
          <span
            key={status}
            className="px-3 py-1 rounded-lg text-muted-foreground font-medium whitespace-nowrap"
          >
            {status} · {
              requisitions.filter(
                (r) => r.status === status
              ).length
            }
          </span>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-3">

      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

        <input
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search requisitions..."
          className="w-[260px] pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-xs"
        />
      </div>

      <button
        onClick={() =>
          setViewMode('kanban')
        }
        className={`p-2 rounded-lg ${
          viewMode === 'kanban'
            ? 'bg-muted'
            : ''
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
      </button>

      <button
        onClick={() =>
          setViewMode('list')
        }
        className={`p-2 rounded-lg ${
          viewMode === 'list'
            ? 'bg-muted'
            : ''
        }`}
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>
      {/* View */}

      <div className="flex-1 min-h-0 px-6 pt-2 pb-8">
        {viewMode === 'kanban' && (
         <RequisitionKanbanBoard
  requisitions={
    filteredRequisitions
  }
  statuses={
    requisitionStatuses
  }
  onStatusChange={
    handleStatusChange
  }
  columnRefs={columnRefs}
  onRequisitionClick={
    setSelectedRequisition
  }
/>
        )}

        {viewMode === 'list' && (
          <div className="p-6 border border-border rounded-lg">
            Requisition List View
          </div>
        )}
           </div>

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
