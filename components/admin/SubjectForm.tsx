'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface SubjectFormProps {
  subject?: {
    id: string
    name: string
    description: string
    icon: string
    color: string
    grade: string
    order: number
  }
  onSubmit: (data: any) => void
  onCancel: () => void
  isLoading?: boolean
}

export function SubjectForm({ subject, onSubmit, onCancel, isLoading }: SubjectFormProps) {
  const [formData, setFormData] = useState({
    name: subject?.name || '',
    description: subject?.description || '',
    icon: subject?.icon || 'BookOpen',
    color: subject?.color || 'from-blue-500 to-blue-600',
    grade: subject?.grade || 'All Levels',
    order: subject?.order || 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const colorOptions = [
    { value: 'from-blue-500 to-blue-600', label: 'Blue', preview: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { value: 'from-green-500 to-green-600', label: 'Green', preview: 'bg-gradient-to-r from-green-500 to-green-600' },
    { value: 'from-purple-500 to-purple-600', label: 'Purple', preview: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { value: 'from-red-500 to-red-600', label: 'Red', preview: 'bg-gradient-to-r from-red-500 to-red-600' },
    { value: 'from-yellow-500 to-yellow-600', label: 'Yellow', preview: 'bg-gradient-to-r from-yellow-500 to-yellow-600' },
    { value: 'from-indigo-500 to-indigo-600', label: 'Indigo', preview: 'bg-gradient-to-r from-indigo-500 to-indigo-600' },
    { value: 'from-pink-500 to-pink-600', label: 'Pink', preview: 'bg-gradient-to-r from-pink-500 to-pink-600' },
    { value: 'from-teal-500 to-teal-600', label: 'Teal', preview: 'bg-gradient-to-r from-teal-500 to-teal-600' }
  ]

  const iconOptions = [
    'BookOpen', 'Calculator', 'Atom', 'Zap', 'Dna', 'Microscope', 'Beaker', 'Globe'
  ]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{subject ? 'Edit Subject' : 'Create New Subject'}</CardTitle>
        <CardDescription>
          {subject ? 'Update the subject information' : 'Add a new learning subject to the platform'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Subject Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Mathematics, Physics, Chemistry"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of what students will learn in this subject"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon">Icon</Label>
              <Select
                id="icon"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              >
                {iconOptions.map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level</Label>
              <Select
                id="grade"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              >
                <option value="All Levels">All Levels</option>
                <option value="Elementary">Elementary</option>
                <option value="Middle School">Middle School</option>
                <option value="High School">High School</option>
                <option value="University">University</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color">Color Theme</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {colorOptions.map(color => (
                <label
                  key={color.value}
                  className={`flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-muted ${
                    formData.color === color.value ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                >
                  <input
                    type="radio"
                    name="color"
                    value={color.value}
                    checked={formData.color === color.value}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full ${color.preview}`} />
                  <span className="text-sm">{color.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="order">Display Order</Label>
            <Input
              id="order"
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
              placeholder="0"
              min="0"
            />
            <p className="text-sm text-muted-foreground">
              Lower numbers appear first in the subject list
            </p>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : (subject ? 'Update Subject' : 'Create Subject')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}