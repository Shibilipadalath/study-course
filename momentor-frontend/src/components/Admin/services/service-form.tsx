"use client";

import { useEffect, useState } from "react";
import { Service } from "@/types/service-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ImageUpload } from "@/components/Admin/image-upload";

interface Props {
  service: Service | null; // null => create
  onClose: () => void;
  onSaved: () => void;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export function ServiceForm({ service, onClose, onSaved }: Props) {
  const isEdit = Boolean(service);
  const [title, setTitle] = useState<string>(service?.title ?? "");
  const [description, setDescription] = useState<string>(service?.description ?? "");
  const [image, setImage] = useState<string>(service?.image ?? "");
  const [pointsText, setPointsText] = useState<string>((service?.points ?? []).join("\n"));
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    setTitle(service?.title ?? "");
    setDescription(service?.description ?? "");
    setImage(service?.image ?? "");
    setPointsText((service?.points ?? []).join("\n"));
  }, [service]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSaving(true);

    const points = pointsText
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean);

    const payload = { title, description, image, points };

    try {
      // use backend URL (not relative)
      const url =
        service && service.id
          ? `${API_BASE_URL}/api/services/${service.id}`
          : `${API_BASE_URL}/api/services`;
      const method = service && service.id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        console.error("Save service error:", json ?? (await res.text()));
        alert(json?.message ?? "Failed to save service");
        return;
      }

      // inform parent to reload list
      onSaved();
      onClose();
    } catch (err) {
      console.error("Save service error:", err);
      alert("Failed to save service");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Service" : "Create Service"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="overflow-y-auto flex-1 grid gap-4 pr-2">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
            </div>

            <div>
              <ImageUpload
                value={image}
                onChange={setImage}
                label="Image"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Points (one per line)</label>
              <Textarea value={pointsText} onChange={(e) => setPointsText(e.target.value)} rows={5} />
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4 shrink-0">
            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving}>{saving ? "Saving..." : isEdit ? "Save" : "Create"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
