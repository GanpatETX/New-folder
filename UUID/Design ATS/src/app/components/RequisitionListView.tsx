import { Calendar, Clock, User, Users } from 'lucide-react';
import type { Requisition, RequisitionStatus } from '../Data/Requisitions';

interface RequisitionListViewProps {
  requisitions: Requisition[];
  onStatusChange: (requisitionId: string, newStatus: RequisitionStatus) => void;
  onRequisitionClick?: (requisition: Requisition) => void;
}

export function RequisitionListView({ requisitions, onStatusChange, onRequisitionClick }: RequisitionListViewProps) {

  const getStatusStyle = (status: RequisitionStatus) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500/10 text-green-500 border border-green-500/20';
      case 'Fulfilled':
        return 'bg-blue-500/10 text-blue-500 border border-blue-500/20';
      case 'Cancelled':
      case 'Rejected':
        return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'On Hold':
        return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      default:
        return 'bg-foreground/5 text-foreground border border-border/50';
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500/10 text-red-400 border border-red-500/20';
      case 'High':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'Medium':
        return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      default:
        return 'bg-foreground/5 text-foreground border border-border/50';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/20 border-b border-border">
            <tr>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">ID</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Position</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Dept</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Hiring Manager</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">HC</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Type</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Priority</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Created</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Target Date</th>
              <th className="text-left px-4 py-2.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {requisitions.map((requisition) => (
              <tr
                key={requisition.id}
                onClick={() => onRequisitionClick && onRequisitionClick(requisition)}
                className="hover:bg-foreground/[0.04] cursor-pointer transition-colors group"
              >
                <td className="px-4 py-3 text-[10px] text-muted-foreground font-medium">{requisition.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold group-hover:text-foreground">
                      {requisition.title}
                    </span>
                    {(requisition.priority === 'Critical' || requisition.priority === 'High') && (
                      <span className="text-[8px] font-semibold text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded leading-none bg-amber-500/10">
                        URGENT
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 bg-muted/40 rounded text-muted-foreground">
                    {requisition.department}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <User className="w-2.5 h-2.5 flex-shrink-0" />
                    {requisition.requester}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Users className="w-2.5 h-2.5 flex-shrink-0" />
                    {requisition.headcount}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-0.5">
                    <span className="px-1.5 py-0.5 bg-muted/40 rounded text-[9px]">
                      {requisition.employmentType}
                    </span>
                    <span className="px-1.5 py-0.5 bg-muted/40 rounded text-[9px]">
                      {requisition.workModel}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${getPriorityStyle(requisition.priority)}`}>
                    {requisition.priority}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Calendar className="w-2.5 h-2.5 flex-shrink-0" />
                    {requisition.createdDate}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="w-2.5 h-2.5 flex-shrink-0" />
                    {requisition.targetHireDate}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${getStatusStyle(requisition.status)}`}>
                    {requisition.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
