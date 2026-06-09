import { useState } from 'react';
import {
  X,
  User,
  Users,
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle,
  Plus,
  Edit,
  Copy,
  Archive,
  FileText,
  MessageSquare,
  Activity
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { BackButton } from './ui/BackButton';

import {
  Requisition,
  RequisitionStatus,
} from '../Data/Requisitions';

interface RequisitionDetailModalProps {
  requisition: Requisition;
  onClose: () => void;
  onStatusChange: (status: RequisitionStatus) => void;
}

type TabType = 'overview' | 'candidates' | 'interviews' | 'notes' | 'activity';

export function RequisitionDetailModal({
  requisition,
  onClose,
  onStatusChange,
}: RequisitionDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const statuses: RequisitionStatus[] = [
    'Draft',
    'Under Review',
    'Open',
    'Fulfilled',
    'Cancelled',
    'Rejected',
    'On Hold',
  ];

  const getStatusColor = (status: RequisitionStatus) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Fulfilled':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Cancelled':
      case 'Rejected':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'On Hold':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default:
        return 'bg-foreground/5 text-foreground border-border';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-5xl h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-border/50 bg-card flex-shrink-0">
          <div className="px-6 pt-4 pb-3">
            <BackButton onClick={onClose} label="Back to Requisitions" />
            <div className="flex items-start justify-between mt-1">
              <div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-muted-foreground font-medium tracking-widest">
                        {requisition.id}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-widest bg-muted/50 text-muted-foreground">
                        {requisition.department}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold">{requisition.title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {requisition.headcount} {requisition.headcount === 1 ? 'Position' : 'Positions'} · {requisition.employmentType} · {requisition.workModel}
                    </p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-8 mt-4 ml-0">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`relative pb-2 text-sm transition-colors ${
                      activeTab === 'overview'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Overview
                    {activeTab === 'overview' && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('candidates')}
                    className={`relative pb-2 text-sm transition-colors ${
                      activeTab === 'candidates'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Candidates
                    {activeTab === 'candidates' && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('interviews')}
                    className={`relative pb-2 text-sm transition-colors ${
                      activeTab === 'interviews'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Interviews
                    {activeTab === 'interviews' && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`relative pb-2 text-sm transition-colors ${
                      activeTab === 'notes'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Notes
                    {activeTab === 'notes' && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('activity')}
                    className={`relative pb-2 text-sm transition-colors ${
                      activeTab === 'activity'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Activity Timeline
                    {activeTab === 'activity' && (
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Content */}
              <div className="col-span-8 space-y-4">
                {activeTab === 'overview' && (
                  <OverviewTab requisition={requisition} />
                )}
                {activeTab === 'candidates' && (
                  <CandidatesTab requisition={requisition} />
                )}
                {activeTab === 'interviews' && (
                  <InterviewsTab requisition={requisition} />
                )}
                {activeTab === 'notes' && (
                  <NotesTab requisition={requisition} />
                )}
                {activeTab === 'activity' && (
                  <ActivityTimelineTab requisition={requisition} />
                )}
              </div>

              {/* Sidebar */}
              <div className="col-span-4 space-y-4">
                {/* Quick Actions */}
                <div className="border border-border rounded-xl p-4 bg-card">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full px-3 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      <Plus className="w-3.5 h-3.5" />
                      Add Candidate
                    </button>
                    <button className="w-full px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/20 transition-colors flex items-center justify-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      Schedule Interview
                    </button>
                    <button className="w-full px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/20 transition-colors flex items-center justify-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Add Note
                    </button>
                    <button className="w-full px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/20 transition-colors flex items-center justify-center gap-2">
                      <Edit className="w-3.5 h-3.5" />
                      Edit Requisition
                    </button>
                    <button className="w-full px-3 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/20 transition-colors flex items-center justify-center gap-2">
                      <Copy className="w-3.5 h-3.5" />
                      Duplicate
                    </button>
                  </div>
                </div>

                {/* Change Status */}
                <div className="border border-border rounded-xl p-4 bg-card">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Change Status
                  </h3>
                  <Select
                    value={requisition.status}
                    onValueChange={(value) =>
                      onStatusChange(value as RequisitionStatus)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Key Details */}
                <div className="border border-border rounded-xl p-4 bg-card">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Key Details
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="text-muted-foreground mb-1">Status</p>
                      <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-semibold border ${getStatusColor(requisition.status)}`}>
                        {requisition.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Priority</p>
                      <p className="font-medium">{requisition.priority}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Open Positions</p>
                      <p className="font-medium">{requisition.headcount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Experience Range</p>
                      <p className="font-medium">{requisition.experienceRange}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Created Date</p>
                      <p className="font-medium">{requisition.createdDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Target Hire Date</p>
                      <p className="font-medium">{requisition.targetHireDate}</p>
                    </div>
                  </div>
                </div>

                {/* Assignment */}
                <div className="border border-border rounded-xl p-4 bg-card">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Assignment
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="text-muted-foreground mb-1">Hiring Manager</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted/60 flex items-center justify-center text-[9px] font-semibold">
                          {requisition.requester.split(' ').map(n => n[0]).join('')}
                        </div>
                        <p className="font-medium">{requisition.requester}</p>
                      </div>
                    </div>
                    {requisition.recruiterAssigned && (
                      <div>
                        <p className="text-muted-foreground mb-1">Recruiter</p>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted/60 flex items-center justify-center text-[9px] font-semibold">
                            {requisition.recruiterAssigned.split(' ').map(n => n[0]).join('')}
                          </div>
                          <p className="font-medium">{requisition.recruiterAssigned}</p>
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-muted-foreground mb-1">Department</p>
                      <p className="font-medium">{requisition.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ requisition }: { requisition: Requisition }) {
  return (
    <div className="space-y-4">
      {/* Requisition Details */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-sm font-semibold mb-4">Requisition Details</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Department</p>
            <p className="font-medium">{requisition.department}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Headcount</p>
            <p className="font-medium">{requisition.headcount}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Role Type</p>
            <p className="font-medium">{requisition.roleType}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Employment Type</p>
            <p className="font-medium">{requisition.employmentType}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Work Model</p>
            <p className="font-medium">{requisition.workModel}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Experience</p>
            <p className="font-medium">{requisition.experienceRange}</p>
          </div>
        </div>
      </div>

      {/* Business Justification */}
      {requisition.businessJustification && (
        <div className="border border-border rounded-xl p-5 bg-card">
          <h3 className="text-sm font-semibold mb-3">Business Justification</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {requisition.businessJustification}
          </p>
        </div>
      )}

      {/* Role Overview */}
      {requisition.roleOverview && (
        <div className="border border-border rounded-xl p-5 bg-card">
          <h3 className="text-sm font-semibold mb-3">Role Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {requisition.roleOverview}
          </p>
        </div>
      )}

      {/* Scope of Work */}
      {requisition.scopeOfWork && requisition.scopeOfWork.length > 0 && (
        <div className="border border-border rounded-xl p-5 bg-card">
          <h3 className="text-sm font-semibold mb-3">Scope of Work</h3>
          <ul className="space-y-2">
            {requisition.scopeOfWork.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {requisition.requirements && requisition.requirements.length > 0 && (
        <div className="border border-border rounded-xl p-5 bg-card">
          <h3 className="text-sm font-semibold mb-3">Requirements</h3>
          <ul className="space-y-2">
            {requisition.requirements.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Required Skills */}
      {requisition.skills && requisition.skills.length > 0 && (
        <div className="border border-border rounded-xl p-5 bg-card">
          <h3 className="text-sm font-semibold mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {requisition.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md border border-border bg-muted/20 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Candidates Tab Component
function CandidatesTab({ requisition }: { requisition: Requisition }) {
  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <h3 className="text-sm font-semibold mb-4">Candidates</h3>
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Users className="w-12 h-12 mb-4 opacity-20" />
        <p className="text-sm">No candidates assigned yet</p>
        <button className="mt-4 px-4 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Add Candidate
        </button>
      </div>
    </div>
  );
}

// Interviews Tab Component
function InterviewsTab({ requisition }: { requisition: Requisition }) {
  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <h3 className="text-sm font-semibold mb-4">Interviews</h3>
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Calendar className="w-12 h-12 mb-4 opacity-20" />
        <p className="text-sm">No interviews scheduled</p>
      </div>
    </div>
  );
}

// Notes Tab Component
function NotesTab({ requisition }: { requisition: Requisition }) {
  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <h3 className="text-sm font-semibold mb-4">Notes</h3>
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
        <p className="text-sm">No notes added</p>
        <button className="mt-4 px-4 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Add Note
        </button>
      </div>
    </div>
  );
}

// Activity Timeline Tab Component
function ActivityTimelineTab({ requisition }: { requisition: Requisition }) {
  const timeline = [
    { event: 'Requisition Created', date: requisition.createdDate, status: 'completed' },
    { event: 'Submitted for Approval', date: 'Pending', status: 'pending' },
    { event: 'Approved', date: 'Pending', status: 'pending' },
    { event: 'Opened', date: requisition.status === 'Open' ? requisition.createdDate : 'Pending', status: requisition.status === 'Open' ? 'current' : 'pending' },
  ];

  return (
    <div className="border border-border rounded-xl p-6 bg-card">
      <h3 className="text-sm font-semibold mb-6">Activity Timeline</h3>
      <div className="space-y-6">
        {timeline.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                item.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                item.status === 'current' ? 'bg-blue-500/20 text-blue-500' :
                'bg-muted/30 text-muted-foreground'
              }`}>
                {item.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                {item.status === 'current' && <Clock className="w-4 h-4" />}
                {item.status === 'pending' && <div className="w-2 h-2 rounded-full bg-muted-foreground" />}
              </div>
              {idx < timeline.length - 1 && (
                <div className={`absolute left-4 top-8 w-[1px] h-6 ${
                  item.status === 'completed' ? 'bg-green-500/30' : 'bg-border'
                }`} />
              )}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm font-medium">{item.event}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
