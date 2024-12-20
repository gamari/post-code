export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      ad_books: {
        Row: {
          amazon_link: string
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          title: string
          views: number | null
        }
        Insert: {
          amazon_link: string
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          title: string
          views?: number | null
        }
        Update: {
          amazon_link?: string
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          title?: string
          views?: number | null
        }
        Relationships: []
      }
      ad_views: {
        Row: {
          ad_book_id: number | null
          created_at: string
          id: number
        }
        Insert: {
          ad_book_id?: number | null
          created_at?: string
          id?: number
        }
        Update: {
          ad_book_id?: number | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "ad_views_ad_book_id_fkey"
            columns: ["ad_book_id"]
            isOneToOne: false
            referencedRelation: "ad_books"
            referencedColumns: ["id"]
          }
        ]
      }
      code_footprints: {
        Row: {
          code_id: number | null
          id: number
          ip_address: string | null
          visited_on: string | null
        }
        Insert: {
          code_id?: number | null
          id?: number
          ip_address?: string | null
          visited_on?: string | null
        }
        Update: {
          code_id?: number | null
          id?: number
          ip_address?: string | null
          visited_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "code_footprints_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_footprints_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          }
        ]
      }
      code_tags: {
        Row: {
          code_id: number
          tag_id: number
          user_id: string | null
        }
        Insert: {
          code_id: number
          tag_id: number
          user_id?: string | null
        }
        Update: {
          code_id?: number
          tag_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "code_tags_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_tags_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      code_views: {
        Row: {
          code_id: number | null
          id: number
          last_viewed: string | null
          view_count: number | null
        }
        Insert: {
          code_id?: number | null
          id?: number
          last_viewed?: string | null
          view_count?: number | null
        }
        Update: {
          code_id?: number | null
          id?: number
          last_viewed?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "code_views_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_views_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          }
        ]
      }
      codes: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          is_public: boolean | null
          language_id: number | null
          published_date: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          is_public?: boolean | null
          language_id?: number | null
          published_date?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          is_public?: boolean | null
          language_id?: number | null
          published_date?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "codes_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "codes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "codes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          code_id: number
          comment: string
          created_at: string | null
          id: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          code_id: number
          comment: string
          created_at?: string | null
          id?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          code_id?: number
          comment?: string
          created_at?: string | null
          id?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      contacts: {
        Row: {
          content: string | null
          created_at: string
          email: string | null
          id: number
          type: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          email?: string | null
          id?: number
          type?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          email?: string | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          code_id: number
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          code_id: number
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          code_id?: number
          created_at?: string | null
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      files: {
        Row: {
          code_id: number
          content: string | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          code_id: number
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          code_id?: number
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "files_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_code_id_fkey"
            columns: ["code_id"]
            isOneToOne: false
            referencedRelation: "random_codes_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      languages: {
        Row: {
          display: string
          id: number
          name: string
        }
        Insert: {
          display: string
          id?: number
          name: string
        }
        Update: {
          display?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          comment_id: number | null
          created_at: string
          favorite_id: number | null
          id: number
          is_checked: boolean
          user_id: string
        }
        Insert: {
          comment_id?: number | null
          created_at?: string
          favorite_id?: number | null
          id?: number
          is_checked?: boolean
          user_id: string
        }
        Update: {
          comment_id?: number | null
          created_at?: string
          favorite_id?: number | null
          id?: number
          is_checked?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_favorite_id_fkey"
            columns: ["favorite_id"]
            isOneToOne: false
            referencedRelation: "favorites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          id: number
          logo_type: string | null
          name: string
        }
        Insert: {
          id?: number
          logo_type?: string | null
          name: string
        }
        Update: {
          id?: number
          logo_type?: string | null
          name?: string
        }
        Relationships: []
      }
      upload_image_histories: {
        Row: {
          file_size: number
          id: number
          image_url: string
          upload_timestamp: string | null
          user_id: string
        }
        Insert: {
          file_size: number
          id?: number
          image_url: string
          upload_timestamp?: string | null
          user_id: string
        }
        Update: {
          file_size?: number
          id?: number
          image_url?: string
          upload_timestamp?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "upload_image_histories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upload_image_histories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          description: string | null
          email: string | null
          icon_type: string | null
          id: string
          is_company: boolean | null
          username: string
          x_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          description?: string | null
          email?: string | null
          icon_type?: string | null
          id: string
          is_company?: boolean | null
          username: string
          x_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          description?: string | null
          email?: string | null
          icon_type?: string | null
          id?: string
          is_company?: boolean | null
          username?: string
          x_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      public_users: {
        Row: {
          avatar_url: string | null
          description: string | null
          icon_type: string | null
          id: string | null
          username: string | null
          x_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          description?: string | null
          icon_type?: string | null
          id?: string | null
          username?: string | null
          x_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          description?: string | null
          icon_type?: string | null
          id?: string | null
          username?: string | null
          x_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      random_codes_view: {
        Row: {
          created_at: string | null
          description: string | null
          id: number | null
          is_public: boolean | null
          language_id: number | null
          published_date: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number | null
          is_public?: boolean | null
          language_id?: number | null
          published_date?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number | null
          is_public?: boolean | null
          language_id?: number | null
          published_date?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "codes_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "codes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "codes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
