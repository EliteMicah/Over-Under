import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wwmxbdwhuwpmvwphbnmn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3bXhiZHdodXdwbXZ3cGhibm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MjYwMDAsImV4cCI6MjA1NzMwMjAwMH0.YGC_0usWfDM-flK3i6yQxR1ZACa7UswEGm3s_2DXmxM'

export const supabase = createClient(supabaseUrl, supabaseAnonkey)